const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getLogin(ctx) {
  const superAdminUser = await prisma.user.findFirst({
    where: { isSuperAdmin: true },
  });
  if (!superAdminUser) {
    return ctx.redirect("/admin/setup");
  }
  return await ctx.render("admin/auth/login", { layout: false });
}

module.exports = { getLogin };
