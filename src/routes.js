const router = require("@koa/router")();
const { ADMIN_ROUTES } = require("./constants/admin.constant");
const { authGuard } = require("./middlewares/admin/auth.middleware");
const {
  checkSuperAdminExists,
  checkSuperAdminNotExists,
} = require("./middlewares/admin/superadmin.middleware");
const { getLoginPage } = require("./controllers/admin/login.controller");
const { getSetupPage } = require("./controllers/admin/setup.controller");

// Admin Routes
router.get(ADMIN_ROUTES.BASE, async (ctx) => {
  return ctx.redirect(ADMIN_ROUTES.LOGIN);
});
router.get(ADMIN_ROUTES.LOGIN, checkSuperAdminExists, getLoginPage);
router.get(ADMIN_ROUTES.SETUP, checkSuperAdminNotExists, getSetupPage);
router.get(ADMIN_ROUTES.DASHBOARD, authGuard, async (ctx) => {
  return (ctx.body = "Dashboard");
});

module.exports = router;
