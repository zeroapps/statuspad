const isAuthenticated = async (ctx, next) => {
  if (!ctx.session.isAuthenticated) {
    return ctx.redirect("/admin/login");
  }
  await next();
};

module.exports = isAuthenticated;
