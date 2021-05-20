const { ADMIN_TITLES, ADMIN_VIEWS } = require("../../constants/admin.constant");

const getSetupPage = async (ctx) => {
  ctx.state.title = ADMIN_TITLES.SETUP;
  return await ctx.render(ADMIN_VIEWS.SETUP, { layout: false });
};

module.exports = { getSetupPage };
