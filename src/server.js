const config = require("./config");
const path = require("path");
const Koa = require("koa");
const session = require("koa-session");
const koaBody = require("koa-body");
const serve = require("koa-static");
const render = require("koa-ejs");
const router = require("./routes");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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
app.use(session(app));

app.use(koaBody());

app.use(serve(path.join(__dirname, "..", "public")));

app.use(router.routes());

render(app, {
  root: path.join(__dirname, "views"),
  layout: "base",
  viewExt: "ejs",
  cache: false,
  debug: false,
});

async function createTestUser() {
  await prisma.user.create({
    data: {
      email: `alice${Date.now()}@prisma.io`,
      password: "asdfasdf",
    },
  });
}

app.listen(config.PORT, config.HOST, () => {
  createTestUser();
  console.log(`Application started at http://${config.HOST}:${config.PORT}`);
});
