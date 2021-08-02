<template>
  <div class="marginTop">
    <h1>{{ name }}</h1>
    <h1>空空如也</h1>
  </div>
</template>

<script>
export default {
  name: "Philosophy",
  data() {
    return {
      name: "Philosophy",
    };
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