export const resolvers = {
  Query: {
    hello: (): string => `Hello, World!`,
    test: (): string => `テストです`,
    user: () => [
      {
        name: "user1",
        age: "11",
        post: { title: "dino1", description: "desc1" },
      },
      {
        name: "user2",
        age: "11",
        post: { title: "dino1", description: "desc1" },
      },
      {
        name: "user3",
        age: "11",
        post: { title: "dino1", description: "desc2" },
      },
    ],
    post: () => [
      { title: "dino1", description: "desc1" },
      { title: "dino2", description: "desc2" },
    ],
  },
};
