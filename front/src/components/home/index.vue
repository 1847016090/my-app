<template>
  <div>
    <TabBar>
      <van-tabs>
        <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tab-bar";
export default {
  data() {
    return {};
  },
  components: {
    TabBar
  }
};
</script>

<style></style>
