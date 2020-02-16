<template>
  <div>
    <TabBar>
      <van-tabs
        background="#4fc08d"
        color="white"
        border="false"
        @click="moduleClick"
      >
        <van-tab
          v-for="item in myModules"
          :title="item.title"
          :key="item.key"
          title-style="color: white"
        >
          <van-panel
            v-for="article in moduleArticle"
            :name="article.key"
            :key="article.id"
            :title="article.title"
            :desc="article.detail"
            @click="articleClick(article._id)"
            style="border-bottom:8px solid rgb(249,249,249)"
          >
          </van-panel>
        </van-tab>
      </van-tabs>
    </TabBar>
    <router-view />
  </div>
</template>

<script>
import TabBar from "@/components/common/tab-bar";
import api from "../../utils/Contant";
export default {
  data() {
    return {
      myModules: [],
      moduleArticle: []
    };
  },
  created() {
    this.initModules();
  },
  methods: {
    async initModules() {
      const {
        data: {
          data: { myModules }
        }
      } = await this.axios.get(api.modules);
      this.myModules = myModules;
      const [{ key }] = myModules;
      const {
        data: {
          data: { moduleArticle }
        }
      } = await this.axios.get(
        api.moduleArticle.format({ moduleKey: Number(key) })
      );
      this.moduleArticle = moduleArticle;
    },
    async moduleClick(key) {
      const {
        data: {
          data: { moduleArticle }
        }
      } = await this.axios.get(
        api.moduleArticle.format({ moduleKey: Number(key) + 1 })
      );
      this.moduleArticle = moduleArticle;
    },
    articleClick(id) {
      this.$router.push({ path: "/article/"+id });
    }
  },
  components: {
    TabBar
  }
};
</script>

<style></style>
