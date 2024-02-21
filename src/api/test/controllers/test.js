"use strict";

/**
 * test controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::test.test", ({ strapi }) => ({
  async count(ctx) {
    const countQuery = {
      where: ctx.query?.filters || {},
    };

    const count = await strapi.db.query("api::test.test").count(countQuery);

    console.log(count);

    if (count) {
      return {
        count,
      };
    } else {
      return ctx.notFound();
    }
  },
}));
