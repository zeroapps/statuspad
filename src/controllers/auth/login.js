async function getLoginPage(ctx) {
  return await ctx.render("auth/login", { layout: false });
}

module.exports = { getLoginPage };
