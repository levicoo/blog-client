<template>
  <div class="marginTop">
    <h1>{{ name }}</h1>
    <h1>空空如也</h1>
  </div>
</template>

<script>
import Article from "components/Article";
export default {
  name: "Sentiment",
  components: {
    Article,
  },
  data() {
    return {
      data: [],
      name: "Sentiment",
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      const params = { className: "sentiment" };
      this.$api.getArticles(params).then((res) => {
        if (res.length == 0) {
          this.data = [
            {
              name: "Sentiment",
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