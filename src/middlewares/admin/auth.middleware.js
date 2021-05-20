const { ADMIN_LOGIN_ROUTE } = require("../../constants/routes/admin.constant");

const authGuard = async (ctx, next) => {
  if (!ctx.session.user) {
    return ctx.redirect(ADMIN_LOGIN_ROUTE);
  }
  await next();
};

// const rolesGuard =
//   (...permittedRoles) =>
//   async (ctx, next) => {
//     if (
//       ctx.session.roles &&
//       ctx.session.roles.some((role) => permittedRoles.includes(role))
//     ) {
//       await next(); // role is allowed, so continue on the next middleware
//     } else {
//       ctx.throw(403, "Forbidden"); // user is forbidden
//     }
//   };

module.exports = { authGuard };
