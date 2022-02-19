const usersRepository = require("../repositories/users.repositories");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    getAllUsers: async (parent, args, context, info) =>
      await usersRepository.findAllUsers(),
  },
  Mutation: {
    signUp: async (parent, args, context, info) => {
      const { email, password, name, phone } = args.user;
      const isUserExist = await usersRepository.existsCheckByEmail(email);

      if (isUserExist) {
        throw new Error("이미 존재하는 이메일 입니다.");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await usersRepository.createUser({
        email,
        password: hashedPassword,
        name,
        phone,
      });

      return user;
    },
    logIn: async (parent, args, context, info) => {
      const { email, password } = args.user;

      const user = await usersRepository.findUserByEmail(email);

      if (!user) {
        throw new Error("이메일과 비밀번호를 확인하세요");
      }

      const isPasswordValidated = await bcrypt.compare(password, user.password);
      console.log(isPasswordValidated);
      if (!isPasswordValidated) {
        throw new Error("이메일과 비밀번호를 확인하세요");
      }

      const payload = { email: email, sub: user.id };
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

      return {
        token: token,
      };
    },
  },
};

module.exports = resolvers;
