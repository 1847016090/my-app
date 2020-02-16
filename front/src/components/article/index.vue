<template>
  <div style="padding:30px">
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
  },
};
</script>

<style></style>
