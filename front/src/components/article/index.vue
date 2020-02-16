<template>
  <div>
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
import api from "../../utils/Contant";
export default {
  props: ["id"],
  data() {
    return {
      value: "",
    };
  },
  async created() {
    let id = this.id;
    const {
      data: {
        data: { article }
      }
    } = await this.axios.get(api.articleInfo.format({ id }));
    this.value = article.info;
  }
};
</script>

<style></style>
