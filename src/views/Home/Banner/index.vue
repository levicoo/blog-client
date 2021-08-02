<template>
  <div class="block">
    <swiper
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide v-for="item in bannerList" :key="item">
        <div v-html="item.imgUrl"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.less";
import SwiperCore, { Autoplay } from "swiper/core";
SwiperCore.use([Autoplay]);
export default {
  name: "Banner",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      bannerList: [],
    };
  },
  mounted() {
    this.getBannerList();
  },
  methods: {
    getBannerList() {
      this.$api.getBannerList().then((res) => {
        this.bannerList = res;
      });
    },
  },
};
</script>

<style lang='less'>
.mySwiper {
  width: 100%;
  margin: 30px auto;
  .swiper-slide {
    width: 100%;
    text-align: center;
    margin: 0 auto;
    img {
      height: 300px;
    }
  }
}
</style>