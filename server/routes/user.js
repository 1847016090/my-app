const Router = require("koa-router");
const router = new Router({ prefix: "/user" });
const { errorRequest } = require("../utils/CUtil");

const db = require("../models");
router.post("/login", async ctx => {
  let user = db.setCollection("user");
  const { body: loginUser } = ctx.request;
  let dbUser = await user.findOne({ user: loginUser.user });
  const loginInfoNotRight =
    dbUser === null ||
    loginUser.user !== dbUser.user ||
    loginUser.password !== dbUser.password;

  if (loginInfoNotRight) {
    ctx.body = errorRequest("你的账号或者密码不正确");
  } else {
    ctx.body = {
      status: 200,
      message: "登陆成功"
    };
  }
});

module.exports = router;
