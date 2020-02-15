const mongodb = require("./index");

mongodb.once("connect", async () => {
  const col = mongodb.setCollection("modules");
  try {
    // 删除该文档的所有数据
    await col.deleteMany();
    // c插入
    await col.insertMany([
      { title: "My Favorite", key: "1" },
      { title: "Javascript", key: "2" },
      { title: "React", key: "3" },
      { title: "Vue", key: "4" }
    ]);
    console.log("插入数据成功");
  } catch (error) {
    console.log("插入数据失败");
    throw error;
  }
});
