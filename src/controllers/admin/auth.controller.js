const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getLoginPage = async (ctx) => {
  return await ctx.render("admin/auth/login", { layout: false });
};

module.exports = { getLoginPage };
