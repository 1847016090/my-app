<template>
  <div style="padding:30px">
    dsds
    <div>dsds</div>
    <mavon-editor
      class="md"
      :value="value"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    ></mavon-editor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '# hahaha'
    };
  },
  created() {
    console.log(Test);
  },
  components: {
    Test
  }
};
</script>

<style></style>
