<template>
  <div>
    <div v-for="item in data" :key="item.id">
      <div class="box">
        <div class="title" @click="change(item._id)">
          {{ item.name }}
          <div class="times">{{ times(item.uploadTime) }}</div>
        </div>
        <div class="guide" v-if="item._id !== show">
          <div class="smallGuide">{{ item.guide }}</div>
          <div class="tags" v-for="tag in item.tag" :key="tag">
            {{ tag }}
          </div>
          <div class="zhankai" @click="change(item._id)">···</div>
        </div>
        <transition name="slide-fade" class="main">
          <div v-if="item._id == show" v-html="item.content"></div>
        </transition>
        <div v-if="item._id == show" @click="change(item._id)" class="left">
          收起
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "../../utils/utils";
export default {
  name: "Article",
  props: {
    item: Object,
  },
  data() {
    return {
      data: [],
      show: false,
      showqi: false,
      params: "",
      scrollTop: "",
    };
  },
  mounted() {
    this.getPath();
  },
  methods: {
    times(value) {
      return utils.formateDate(new Date(value));
    },
    change(id) {
      if (id == this.show) {
        this.show = false;
        window.scrollTo(0, this.scrollTop);
    
        return;
      }
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.show = id;
      this.showqi = id;
    },
    getArticles() {
      this.$api.getArticles(this.params).then((res) => {
        this.data = res;
      });
    },
    getPath() {
      this.params = { tag: this.$route.query.key };
      if (this.params.tag == undefined) {
        this.params = { tag: this.$route.path.slice(1) };
        if (this.params.tag == "") {
          this.params = { frontpage: true };
        }
      }
      this.getArticles();
    },
  },
  watch: {
    $route: "getPath",
  },
};
</script>

<style lang='less'>
.box {
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px 2px rgba(185, 184, 184, 0.4);
  margin: 30px auto;
  width: 880px;
  cursor: pointer;
  overflow: hidden;
  .left {
    text-align: right;
    color: rgb(150, 144, 144);
  }
  .guide {
    color: #666;
    line-height: 2;
    .smallGuide {
      text-indent: 2em;
      float: left;
    }
    .tags {
      float: left;
      margin-left: 10px;
      margin-top: 6px;
      height: 20px;
      line-height: 20px;
      padding: 0px 5px 2px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    .zhankai {
      color: rgb(150, 144, 144);
      float: right;
    }
  }

  .title {
    font-size: 28px;
    line-height: 34px;
    border-bottom: 1px solid #ccc;
    font-family: Fantasy;
    .times {
      float: right;
      font-size: 18px;
    }
  }
  .main {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.5;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>