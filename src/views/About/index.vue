<template>
  <div class="about"><Info></Info></div>
</template>

<script>
import Info from "components/Info";
export default {
  name: "About",
  components: {
    Info,
  },
};
</script>

<style scope>
.about {
  width: 290px;
  height: 220px;
  margin: 130px auto 30px;
}
</style>