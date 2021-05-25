const {
  ADMIN_TITLES,
  ADMIN_VIEWS,
  ADMIN_ROUTES,
} = require("../../constants/admin.constant");

const getSetupPage = async (ctx) => {
  ctx.state.title = ADMIN_TITLES.SETUP;
  return await ctx.render(ADMIN_VIEWS.SETUP, {
    constants: { ADMIN_ROUTES },
    layout: false,
  });
};

const doSetup = async (ctx) => {
  ctx.state.title = ADMIN_TITLES.SETUP;
  try {
    if (ctx.invalid) {
      return ctx.throw(400, ctx.invalid.body);
    }
    const data = ctx.request.body;
    console.log(data);
    return (ctx.body = {});
  } catch (err) {
    if (err.name === "ValidationError") {
      ctx.status = 400;
      return (ctx.body = { message: err.msg });
    } else {
      return ctx.throw(400, err);
    }
  }
};

module.exports = { getSetupPage, doSetup };
