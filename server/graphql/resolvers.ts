export const resolvers = {
  Query: {
    hello: (): string => `Hello, World!`,
    test: (): string => `テストです`,
    user: () => [{ name: "user1" }, { name: "user2" }, { name: "user3" }],
    allDinosaur: () => [
      { name: "dino1", description: "desc1" },
      { name: "dino2", description: "desc2" },
    ],
  },
};
