<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
    <slot></slot>
    <van-tabbar
      fixed
      route
      v-model="active"
      active-color="#07c160"
      inactive-color="#000"
    >
      <van-tabbar-item replace to="/home" icon="home-o"></van-tabbar-item>
      <van-tabbar-item replace to="/my-focus" icon="search"></van-tabbar-item>
      <van-tabbar-item replace to="/setting" icon="setting-o"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "/home"
    };
  }
};
</script>

<style></style>
