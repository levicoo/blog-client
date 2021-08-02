<template>
  <div class="timesBox">
    <div class="title">Anonymous time</div>
    <div class="biaoqian">
      {{ d }} DAYS {{ h }} HOURS {{ m }} MINS {{ s }} SEC
    </div>
  </div>
</template>
<script>
export default {
  name: "Times",
  data() {
    return {
      d: "",
      h: "",
      m: "",
      s: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.getTimes();
    }, 1000);
  },
  methods: {
    getTimes() {
      let nowtime = new Date();
      let endtime = new Date("2019/07/25,20:00:00");
      let lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
      this.d = Math.abs(parseInt(lefttime / (24 * 60 * 60)));
      this.h = Math.abs(parseInt((lefttime / (60 * 60)) % 24));
      this.m = Math.abs(parseInt((lefttime / 60) % 60));
      this.s = Math.abs(parseInt(lefttime % 60));
    },
  },
};
</script>

<style lang='less'>
.timesBox {
  padding: 20px;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 250px;

  text-align: center;
  .title {
    font-family: Fantasy;
    font-size: 22px;
    line-height: 1.6;
  }
  .biaoqian {
    font-size: 12px;
  }
}
</style>