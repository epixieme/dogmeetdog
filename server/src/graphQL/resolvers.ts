const { GraphQLError } = require("graphql");
// const expressGraphql = require("express-graphql");
const { graphqlUploadExpress } = require("graphql-upload-ts");
// const cloudinary = require("cloudinary").v2;
const { finished } = require("stream/promises");
// const { cloudinaryConfig } = require("../../config/cloudinaryConfig");

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
  // Upload: graphqlUploadExpress,
  Mutation: {
    // uploadFile: async (parent: any, { file }: any) => {
    //   const { createReadStream } = await file;
    //   const stream = createReadStream();

    //   let cloudinaryUploadStream;

    //   const uploadPromise = new Promise((resolve, reject) => {
    //     cloudinaryUploadStream = cloudinary.uploader.upload_stream({ folder: "uploads" }, (error: any, result: any) => {
    //       if (result) {
    //         resolve(result);
    //       } else {
    //         reject(error);
    //       }
    //     });
    //   });
    //   stream.pipe(cloudinaryUploadStream);
    //   const result: any = await uploadPromise;

    //   return {
    //     url: result.secure_url,
    //   };
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
      const { name, breed, age, personality, email, password } = args;
      const user = new User({
        name: name,
        breed: breed,
        age: age,
        personality: personality,
        email: email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
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
        message: "Login successful!",
      };
    },
  },
};

module.exports = resolvers;
