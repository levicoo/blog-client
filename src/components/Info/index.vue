<template>
  <div class="introduce">
    <div class="avatar">
      <img src="~assets/images/github.png" alt="" />
      <p>@levicoo</p>
    </div>
    <div class="text">
      <p><span>年纪：20</span></p>
      <p>
        <span
          >简历：阿里巴巴13年工作经验，支付宝项目负责人，精通各种编程语言</span
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Info",
};
</script>

<style lang='less'>
.introduce {
  padding: 20px;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 250px;
  .avatar {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .text {
    margin-top: 20px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>