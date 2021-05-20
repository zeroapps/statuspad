const { ADMIN_ROUTES } = require("../../constants/admin.constant");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const checkSuperAdminExists = async (ctx, next) => {
  const superAdminUser = await prisma.user.findFirst({
    where: { isSuperAdmin: true },
  });
  if (superAdminUser) {
    await next();
  } else {
    return ctx.redirect(ADMIN_ROUTES.SETUP);
  }
};

const checkSuperAdminNotExists = async (ctx, next) => {
  const superAdminUser = await prisma.user.findFirst({
    where: { isSuperAdmin: true },
  });
  if (!superAdminUser) {
    await next();
  } else {
    return ctx.redirect(ADMIN_ROUTES.LOGIN);
  }
};

module.exports = {
  checkSuperAdminExists,
  checkSuperAdminNotExists,
};
