const {
  ADMIN_LOGIN_ROUTE,
  ADMIN_SETUP_ROUTE,
} = require("../../constants/routes/admin.constant");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const checkSuperAdminExists = async (ctx, next) => {
  const superAdminUser = await prisma.user.findFirst({
    where: { isSuperAdmin: true },
  });
  if (superAdminUser) {
    await next();
  } else {
    return ctx.redirect(ADMIN_SETUP_ROUTE);
  }
};

const checkSuperAdminNotExists = async (ctx, next) => {
  const superAdminUser = await prisma.user.findFirst({
    where: { isSuperAdmin: true },
  });
  if (!superAdminUser) {
    await next();
  } else {
    return ctx.redirect(ADMIN_LOGIN_ROUTE);
  }
};

module.exports = {
  checkSuperAdminExists,
  checkSuperAdminNotExists,
};
