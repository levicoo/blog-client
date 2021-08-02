<template>
  <div class="segmentation">
    <div class="main">
      <p>blog</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Segmentation",
};
</script>

<style lang='less'>
.segmentation {
  width: 100%;
  height: 50px;
  box-shadow: 0 3px 6px 4px rgba(199, 193, 193, 0.4);
  .main {
    height: 100%;
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    font-family: Fantasy;
    font-weight: 700;
    p {
      padding-top: 15px;
    }
  }
}
</style>