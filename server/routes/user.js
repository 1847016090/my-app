const Router = require("koa-router");
const fs = require("fs");
const router = new Router({ prefix: "/user" });
const { errorRequest, successRequest } = require("../utils/CUtil");

let store = {};
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
  const myModules = await modules.find().toArray();
  ctx.body = successRequest("Success", { myModules });
});

router.get("/articles/:moduleKey", async ctx => {
  const { moduleKey } = ctx.params;
  let articles = db.setCollection("articles");

  const moduleArticle = await articles.find({ moduleKey }).toArray();
  ctx.body = successRequest("Success", { moduleArticle });
});

router.get("/articles/info/:articleId", async ctx => {
  const { articleId } = ctx.params;
  let articles = db.setCollection("articles");

  const article = await articles.findOne({ id: Number(articleId) });
  ctx.body = successRequest("Success", { article });
});

// router.post("/articles/upload", async ctx => {
//   const { body } = ctx.request;
//   const { moduleKey,  }
// });

/**
 * 实现upload功能，使用koa-multer 中间件
 */
const Multer = require("koa-multer");
var storage = Multer.diskStorage({
  //文件保存路径
  destination: function(req, file, cb) {
    cb(null, "./public/images");
  },
  //修改文件名称
  filename: function(req, file, cb) {
    var fileFormat = file.originalname.split("."); //以点分割成数组，数组的最后一项就是后缀名
    cb(
      null,
      fileFormat[0] +
        "-" +
        new Date().toLocaleString() +
        "." +
        fileFormat[fileFormat.length - 1]
    );
  }
});
//加载配置
var upload = Multer({ storage: storage });

router.post("/upload", upload.single("file"), async ctx => {
  // console.log("data: ", data);
  console.log("file", ctx.req.file);
  const path = `./${ctx.req.file.path}`;
  const data = await fs.readFileSync(path);
  store[ctx.req.file.filename] = data.toString();
  // 写入数据库
  ctx.body = {
    info: ctx.req.file.filename
  };
});

/**
 * 添加文章
 */
router.post("/articles/add", async ctx => {
  const { body } = ctx.request;
  let articles = db.setCollection("articles");
  const aa = await articles.insertOne({
    ...body,
    info: store[body.info],
    id: Date.now()
  });
  // console.log(aa.result.ok);
  ctx.body = successRequest("Success");
});
module.exports = router;
