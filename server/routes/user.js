const Router = require("koa-router");
const router = new Router({ prefix: "/user" });
const { errorRequest, successRequest } = require("../utils/CUtil");

const db = require("../models");
router.post("/login", async ctx => {
  /**
   * seup a collection with mongodb
   */
  let user = db.setCollection("user");
  const { body: loginUser } = ctx.request;
  let dbUser = await user.findOne({ user: loginUser.user });
  /**
   * loginUser: login user info
   * dbUser: mongodb user info
   * loginInfoNotRight: judge login info is not right and send a message
   */
  const loginInfoNotRight =
    dbUser === null ||
    loginUser.user !== dbUser.user ||
    loginUser.password !== dbUser.password;

  if (loginInfoNotRight) {
    ctx.body = errorRequest("Your password or loginname is not right!");
  } else {
    ctx.body = successRequest("Login successfully!", {});
  }
});

router.get("/modules", async ctx => {
  let modules = db.setCollection("modules");
  const myModules = await modules.find(JSON.stringify({})).toArray();
  ctx.body = successRequest("Success", { myModules });
});

router.get("/articles/:moduleKey", async ctx => {
  const { moduleKey } = ctx.params;
  let articles = db.setCollection("articles");

  const moduleArticle = await articles.find({ moduleKey }).toArray();
  ctx.body = successRequest("Success", { moduleArticle });
});

module.exports = router;
