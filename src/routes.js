const router = require("@koa/router")();
const { getLoginPage } = require("./controllers/auth/login");

// Auth Routes
router.get("/login", getLoginPage);

module.exports = router;
