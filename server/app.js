/**
 * 引入 koa
 */
const Koa = require("koa");
const app = new Koa();

// 处理跨域
const cors = require("koa2-cors");
app.use(cors());

/**
 * 处理session
 */
const session = require("koa-session");
app.keys = ["some secrets"];
const SESS_CONFIG = {
  key: "haha:asasa", // 这个keys 重新设置使，必须得切换一下
  maxAge: 864000, //有效期为1天
  httpOnly: true, // 服务器有效
  signed: true // 签名
};
app.use(session(SESS_CONFIG, app));

/**
 * 处理post请求
 */
const bodyparser = require("koa-bodyparser");
app.use(bodyparser());

/**
 * 引入路由
 */
const user = require("./routes/user");
app.use(user.routes());

/**
 * 设置监听端口
 */
app.listen(3000);
