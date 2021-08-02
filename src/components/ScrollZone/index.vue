<template>
  <div class="scrollZone">
    <ul>
      <li v-for="item in 6" :key="item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ScrollZone",
};
</script>

<style lang='less'>
.scrollZone {
  width: 100%;
  margin: 0 auto;
  background-color: rgb(204, 203, 203);
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    li {
      width: 100px;
      height: 100px;
      margin: 0 20px;
      background-color: red;
      border-radius: 50%;
    }
  }
}
</style>