module.exports = {
  routes: [
    {
      method: "GET",
      path: "/tests/custom/count",
      handler: "api::test.test.count",
    },
  ],
};
