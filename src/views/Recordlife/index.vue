<template>
  <div class="marginTop">
    <h1>{{ name }}</h1>
    <h1>空空如也</h1>
  </div>
</template>

<script>
import Article from "components/Article";
export default {
  name: "Recordlife",
  components: {
    Article,
  },
  data() {
    return {
      data: [],
      name: "Recordlife",
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      const params = { className: "recordlife" };
      this.$api.getArticles(params).then((res) => {
        if (res.length == 0) {
          this.data = [
            {
              name: "Recordlife",
              content: "<h2 lineheight='30px'>空空如也</h2>",
            },
          ];
        } else {
          this.data = res;
        }
      });
    },
  },
};
</script>

<style lang='less'>
.marginTop {
  margin-top: 100px;
 h1 {
    text-align: center;
  }
}
</style>