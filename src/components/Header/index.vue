<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <span class="levicoo"> Levicoo</span
          ><span class="logoTitle">｜{{ logoTitle }}</span>
        </router-link>
      </div>
      <div class="menuList">
        <ul>
          <li v-for="item in menuList" :key="item._id">
            <router-link :to="item.path">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="github">
        <a href="https://github.com/levicoo" target="_blank"
          ><img src="~assets/images/github.png" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuList: [],
      userSearch: {
        search: "",
      },
      logoTitle: "",
    };
  },
  mounted() {
    this.getMenuList();
    this.getLogo();
  },
  methods: {
    getMenuList() {
      this.$api.getMenuList().then((res) => {
        this.menuList = res;
      });
    },
    getLogo() {
      this.$api.getLogo().then((res) => {
        this.logoTitle = res[0].content;
      });
    },
    goPath(path) {
      console.log(path);
      this.$router.push(path);
    },
  },
};
</script>

<style lang='less'>
.header {
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  line-height: 80px;
  box-shadow: 0 0 5px 2px rgba(165, 154, 154, 0.2);
  z-index: 10;
  .container {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    .github {
      float: left;
      width: 80px;
      img {
        width: 100%;
      }
    }

    .logo {
      width: 380px;
      text-align: center;
      height: 100%;
      font-family: Fantasy;
      float: left;
      .levicoo {
        font-size: 30px;
        font-weight: 700;
        color: brown;
      }
    }
    .menuList {
      float: left;
      margin: 0 30px;
      width: 600px;
      font-size: 20px;
      font-family: Fantasy;
      font-weight: 700;
      height: 100%;
      margin-left: 100px;
      ul {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: flex-end;
        li {
          text-align: center;
          flex: 1;
          cursor: pointer;
          margin: 0 10px;
          height: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .container {
      width: 880px;
      margin: 0 auto;
      .logo {
        width: 180px;
        margin-left: 20px;
        .logoTitle {
          display: none;
        }
      }

      .menuList {
        margin-left: 50px;
        min-width: none;
      }
    }
    .github {
      display: none;
    }
  }
}
.router-link-active {
  color: brown;
}
</style>