import { createServer, Model } from "miragejs";
import { Response } from "miragejs";

createServer({
  models: {
    dogs: Model,
  },

  seeds(server) {
    server.create("dog", {
      id: "1",
      name: "Wolfy",
      description:
        "Large dog, very friendly and ready to meet other large breeds",
      imageUrl:
      "https://i.ibb.co/tzWGk3j/husky.jpg",
      likes: "Juicy Bones",
    });
    server.create("dog", {
      id: "2",
      name: "Wolfy",
      description:
        "Large dog, very friendly and ready to meet other large breeds",
      imageUrl:
      "https://i.ibb.co/tzWGk3j/husky.jpg",
      likes: "Juicy Bones",
    });
    server.create("dog", {
      id: "3",
      name: "Wolfy",
      description:
        "Large dog, very friendly and ready to meet other large breeds",
      imageUrl:
      "https://i.ibb.co/tzWGk3j/husky.jpg",
      likes: "Juicy Bones",
    });
    server.create("dog", {
      id: "4",
      name: "Wolfy",
      description:
        "Large dog, very friendly and ready to meet other large breeds",
      imageUrl:
      "https://i.ibb.co/tzWGk3j/husky.jpg",
      likes: "Juicy Bones",
    });
    server.create("dog", {
      id: "5",
      name: "Wolfy",
      description:
        "Large dog, very friendly and ready to meet other large breeds",
      imageUrl:
      "https://i.ibb.co/tzWGk3j/husky.jpg",
      likes: "Juicy Bones",
    });
    server.create("dog", {
      id: "6",
      name: "Wolfy",
      description:
        "Large dog, very friendly and ready to meet other large breeds",
      imageUrl:
      "https://i.ibb.co/tzWGk3j/husky.jpg",
      likes: "Juicy Bones",
    });
    server.create("dog", {
      id: "7",
      name: "Wolfy",
      description:
        "Large dog, very friendly and ready to meet other large breeds",
      imageUrl:
      "https://i.ibb.co/tzWGk3j/husky.jpg",
      likes: "Juicy Bones",
    });
    server.create("dog", {
      id: "8",
      name: "Wolfy",
      description:
        "Large dog, very friendly and ready to meet other large breeds",
      imageUrl:
      "https://i.ibb.co/tzWGk3j/husky.jpg",
      likes: "Juicy Bones",
    });
    server.create("dog", {
      id: "9",
      name: "Wolfy",
      description:
        "Large dog, very friendly and ready to meet other large breeds",
      imageUrl:
      "https://i.ibb.co/tzWGk3j/husky.jpg",
      likes: "juicy-bones",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;
    this.timing = 2000;

    this.get("/dogs", (schema, request) => {
      // use commented out response to test error handling
      // return new Response(400, {}, { error: "Error fetching data" });
        return schema.dogs.all()
    });

    this.get("/dogs/:id", (schema, request) => {
      const id = request.params.id;
      return schema.dogs.find(id);
    });
  },
});
