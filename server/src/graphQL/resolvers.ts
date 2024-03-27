const { GraphQLError } = require("graphql");
const Dog = require("../../model/Dog");
const Age = require("../../model/Age");
const User = require("../../model/User");
const bcrypt = require("bcrypt");
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY as unknown as string;

const resolvers = {
  Query: {
    allDogs: async (_root: any, _args: any) => Dog.find({}),
    allAges: async (_root: any, _args: any) => Age.find({}),
    hello: () => "Hello world!",
    currentUser: (_root: any, args: any, context: any) => {
      return context.currentUser;
    },
  },
  Mutation: {
    addAsFriend: async (_root: any, args: any, { currentUser }: any) => {
      const isFriend = (dog: any) =>
        currentUser.friends
          .map((f: { _id: { toString: () => any } }) => f._id.toString())
          .includes(dog._id.toString());

      if (!currentUser) {
        throw new GraphQLError("wrong credentials", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const dog = await Dog.findOne({ name: args.name });
      if (!isFriend(dog)) {
        currentUser.friends = currentUser.friends.concat(dog);
      }

      await currentUser.save();

      return currentUser;
    },
    addDog: async (_root: any, args: any, context: any) => {
      const dog = new Dog({ ...args });
      const currentUser = context.currentUser;

      if (!currentUser) {
        throw new GraphQLError("not authenticated", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }

      try {
        await dog.save();
        currentUser.friends = currentUser.friends.concat(dog);
        await currentUser.save();
      } catch (error) {
        throw new GraphQLError("Saving user failed", {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: args.name,
            error,
          },
        });
      }

      return dog;
    },

    addAge: async (_root: any, args: any) => {
      const age = new Age({ ...args });
      return age.save();
    },

    createUser: async (_root: any, args: any) => {
      const user = new User({
        email: args.email,
        password: bcrypt.hashSync(args.password, bcrypt.genSaltSync(10)),
      });
      return user.save().catch((error: any) => {
        throw new GraphQLError("Creating the user failed", {
          extensions: {
            code: "BAD_USER_INPUT",
            invalidArgs: args.email,
            error,
          },
        });
      });
    },

    loginUser: async (_root: any, args: any) => {
      const user = await User.findOne({ email: args.email });

      const userForToken = {
        email: user.email,
        id: user._id,
      };

      if (user && bcrypt.compareSync(args.password, user?.password as string)) {
        return {
          value: jwt.sign(userForToken, SECRET_KEY, { expiresIn: "2h" }),
        };
      } else if (!user || args.password !== user.password) {
        throw new GraphQLError("wrong credentials", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }
    },
  },
};

module.exports = resolvers;
