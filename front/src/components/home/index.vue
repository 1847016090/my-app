<template>
  <div>
    <TabBar>
      <van-tabs background="#4fc08d">
        <van-tab v-for="item in myModules" :title="item.title" :key="item.key">
          {{item.title}}
        </van-tab>
      </van-tabs>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tab-bar";
import api from "../../utils/Contant";
export default {
  data() {
    return {
        myModules: []
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
    }
  },
  components: {
    TabBar
  }
};
</script>

<style></style>
