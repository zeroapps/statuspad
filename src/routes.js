const router = require("@koa/router")();
const {
  ADMIN_BASE_ROUTE,
  ADMIN_LOGIN_ROUTE,
  ADMIN_SETUP_ROUTE,
  ADMIN_DASHBOARD_ROUTE,
} = require("./constants/routes/admin.constant");
const { authGuard } = require("./middlewares/admin/auth.middleware");
const {
  checkSuperAdminExists,
  checkSuperAdminNotExists,
  checkSuperAdmin,
} = require("./middlewares/admin/setup.middleware");
const { getLoginPage } = require("./controllers/admin/auth.controller");
const { getSetupPage } = require("./controllers/admin/setup.controller");

// Admin Routes
router.get(ADMIN_BASE_ROUTE, async (ctx) => {
  return ctx.redirect(ADMIN_LOGIN_ROUTE);
});
router.get(ADMIN_LOGIN_ROUTE, checkSuperAdminExists, getLoginPage);
router.get(ADMIN_SETUP_ROUTE, checkSuperAdminNotExists, getSetupPage);
router.get(ADMIN_DASHBOARD_ROUTE, authGuard, async (ctx) => {
  return (ctx.body = "Dashboard");
});

module.exports = router;
