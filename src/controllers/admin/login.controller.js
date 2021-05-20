const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { ADMIN_TITLES, ADMIN_VIEWS } = require("../../constants/admin.constant");

const getLoginPage = async (ctx) => {
  ctx.state.title = ADMIN_TITLES.LOGIN;
  return await ctx.render(ADMIN_VIEWS.LOGIN, { layout: false });
};

module.exports = { getLoginPage };
