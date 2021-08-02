<template>
  <div class="marginTop">
    <Banner> </Banner>
    <div class="content clearfix">
      <div class="sideBar">
        <Info class="info"> </Info>
        <Times class="times"> </Times>
        <Tag> </Tag>
      </div>
      <div class="article">
        <router-view />
        <!-- <Article v-for="item in data" :key="item" :item="item"> </Article> -->
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import Info from "components/Info";
import Times from "components/Times";
import Tag from "components/Tag";

export default {
  name: "Home",
  components: {
    Banner,
    Info,
    Times,
    Tag,
  },
};
</script>

<style lang='less'>
.marginTop {
  margin-top: 100px;
}
.content {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  .sideBar {
    float: left;
    margin-top: 30px;
    margin-right: 30px;
    .info {
      margin-bottom: 30px;
    }
    .times {
      margin-bottom: 30px;
    }
  }
}
@media screen and(min-width: 1200px) {
  .article {
    float: left;
  }
}
@media screen and(max-width: 1200px) {
  .content {
    width: 100%;
  }
  .sideBar {
    display: none;
  }
  .article {
    margin: 30px auto;
    float: none;
  }
}

.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>