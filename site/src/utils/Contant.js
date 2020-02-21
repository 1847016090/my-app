const apiPrefix = "http://localhost:3000";

const judgeType = data => {
  return Object.prototype.toString.call(data).slice(8, -1);
};

String.prototype.format = function(obj) {
  var str = this;
  var newStr = "";
  if (judgeType(obj) === "Object" && JSON.stringify(obj) !== "{}") {
    Object.entries(obj).forEach(module => {
      const [key, value] = module;
      newStr = str.replace(`{${key}}`, value);
    });
  }
  return newStr;
};
const user = {
  login: apiPrefix + "/user/login",
  modules: apiPrefix + "/user/modules",
  moduleArticle: apiPrefix + "/user/articles/{moduleKey}",
  articleInfo: apiPrefix + "/user/articles/info/{id}",
  addArticle: apiPrefix + "/user/articles/add"
};

export default user;
