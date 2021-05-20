const config = require("./config");
const path = require("path");
const Koa = require("koa");
const session = require("koa-session");
const koaBody = require("koa-body");
const serve = require("koa-static");
const hbs = require("koa-hbs");
const router = require("./routes");

// Init Application
if (!config.SESSION_SECRET) {
  console.error(
    "SESSION_SECRET variable not found in environment. Please add it to .env file :)"
  );
  process.exit(2);
}

const app = new Koa();

// App Settings
app.proxy = true;
app.keys = [config.SESSION_SECRET];

// Middlewares

// Handlerbars Template Engine
app.use(
  hbs.middleware({
    viewPath: path.join(__dirname, "views"),
    viewExt: "hbs",
  })
);

app.use(session(app));

app.use(koaBody());

app.use(serve(path.join(__dirname, "..", "public")));

app.use(router.routes());

// Catch 404 Errors
app.use(async (ctx, next) => {
  await next();
  if (ctx.status === 404) {
    await ctx.render("404", { layout: false });
  }
});

app.listen(config.PORT, config.HOST, () => {
  console.log(`Application started at http://${config.HOST}:${config.PORT}`);
});
