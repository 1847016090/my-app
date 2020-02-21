<template>
  <div>
    <el-row>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          title:
          <el-input
            v-model="form.title"
            placeholder="请输入内容"
          ></el-input></div
      ></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          moduleKey:<el-select v-model="form.moduleKey" placeholder="请选择">
            <el-option
              v-for="item in myModules"
              :key="item.key"
              :label="item.title"
              :value="item.key"
            >
            </el-option>
          </el-select></div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          detail:<el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="form.detail"
            maxlength="30"
            show-word-limit
          ></el-input></div
      ></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          info:

          <el-upload
            action="http://localhost:3000/user/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </div></el-col
      >
    </el-row>
    <el-button size="small" type="primary" @click="submit">Submit</el-button>
  </div>
</template>

<script>
import api from "../utils/Contant";

export default {
  data() {
    return {
      myModules: [],
      form: {
        title: "",
        moduleKey: "",
        detail: "",
        info: ""
      }
    };
  },
  async created() {
    this.init();
  },
  methods: {
    async init() {
      const {
        data: {
          data: { myModules }
        }
      } = await this.axios.get(api.modules);
      this.myModules = myModules;
    },
    handleAvatarSuccess(res, file) {
      this.$message.success("上传成功！");
      this.form.info = res.info;
    },
    async submit() {
      const data = await this.axios.post(api.addArticle, this.form);
      console.log("data: ", data);
      if (data.data.status === 200) {
        this.$message.success("添加成功！");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
