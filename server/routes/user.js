const Router = require("koa-router");
const router = new Router({ prefix: "/user" });

router.post("/login", async ctx => {
  ctx.body = {
    ok: 200,
    data: ctx.request.body
  };
});

module.exports = router;
