const { GraphQLError } = require("graphql");

const Age = require("../../model/Age");
const Breed = require("../../model/Breed");
const Personality = require("../../model/Personality");
const User = require("../../model/User");
const bcrypt = require("bcrypt");
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY as unknown as string;

const resolvers = {
  Query: {
    allUsers: async (_root: any, _args: any) => User.find({}),
    allAges: async (_root: any, _args: any) => Age.find({}),
    allBreeds: async (_root: any, _args: any) => Breed.find({}),
    allPersonalityTypes: async (_root: any, _args: any) => Personality.find({}),
    currentUser: (_root: any, args: any, context: any) => {
      return context.currentUser;
    },
  },
  Mutation: {
    // addAsFriend: async (_root: any, args: any, { currentUser }: any) => {
    //   // const isFriend = (user: any) =>
    //   //   currentUser.friends
    //   //     .map((f: { _id: { toString: () => any } }) => f._id.toString())
    //   //     .includes(user._id.toString());

    //   if (!currentUser) {
    //     throw new GraphQLError("wrong credentials", {
    //       extensions: { code: "BAD_USER_INPUT" },
    //     });
    //   }

    // const user = await User.findOne({ name: args.name });
    // if (!isFriend(user)) {
    //   currentUser.friends = currentUser.friends.concat(user);
    // }

    // return currentUser.save();

    //  currentUser;
    // },

    addAge: async (_root: any, args: any) => {
      const age = new Age({ ...args });
      return age.save();
    },

    addBreed: async (_root: any, args: any) => {
      const breed = new Breed({ ...args });
      return breed.save();
    },
    addPersonality: async (_root: any, args: any) => {
      const personality = new Personality({ ...args });
      return personality.save();
    },

    createUser: async (_root: any, args: any) => {
      // const [name, breed, age, personality, email ] = args;
      const user = new User({
        name: args.name,
        breed: args.breed,
        age: args.age,
        personality: args.personality,
        email: args.email,
        password: bcrypt.hashSync(args.password, bcrypt.genSaltSync(10)),
      });
      return user.save().catch((error: any) => {
        if (error.code === 11000 && error.keyPattern.email) {
          // If there's a duplicate email error
          throw new GraphQLError("Email already exists", {
            extensions: {
              code: "DUPLICATE_EMAIL",
              invalidArgs: args.email,
              error, // Original error object for more context
            },
          });
        } else {
          throw new GraphQLError("Creating the user failed", {
            extensions: {
              code: "BAD_USER_INPUT",
              invalidArgs: args.email,
              error,
            },
          });
        }
      });
    },

    loginUser: async (_root: any, args: any) => {
      const { email, password } = args;

      if (!email) {
        throw new GraphQLError("Email is required", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      // Check for missing password
      if (!password) {
        throw new GraphQLError("Password is required", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const user = await User.findOne({ email });

      // Check if user exists
      if (!user) {
        throw new GraphQLError("User not found", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      // Check if password matches
      const passwordMatches = bcrypt.compareSync(password, user.password);
      if (!passwordMatches) {
        throw new GraphQLError("Incorrect password", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      // If user exists and password matches, create JWT token
      const userForToken = {
        email: user?.email,
        id: user?._id,
      };

      return {
        value: jwt.sign(userForToken, SECRET_KEY, { expiresIn: "2h" }),
      };
    },
  },
};

module.exports = resolvers;
