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
    ctx.body = errorRequest("你的账号或者密码不正确");
  } else {
    ctx.body = successRequest("登陆成功", {});
  }
});

router.get("/modules", async ctx => {
  let modules = db.setCollection("modules");
  console.log(modules);
});
module.exports = router;
