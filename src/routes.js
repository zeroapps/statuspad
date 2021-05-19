const router = require("@koa/router")();
const { getLogin } = require("./controllers/admin/auth");
const isAuthenticated = require("./middlewares/admin/auth");

// Admin Routes
router.get("/admin/login", getLogin);
router.get("/admin/setup", async (ctx) => {
  return (ctx.body = "Setup Page");
});
router.get("/admin/dashboard", isAuthenticated, async (ctx) => {
  return (ctx.body = "Dashboard");
});

module.exports = router;
