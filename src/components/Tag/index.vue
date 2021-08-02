<template>
  <div class="tagBox">
    <ul>
      <li
        v-for="item in tagTool"
        :key="item.key"
        @click="go(item.key)"
        :class="{ active: item.key == bgc }"
      >
        {{ item.key }}
        <i>{{ item.value }}</i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Tag",
  data() {
    return {
      tagTool: [],
      isActive: false,
      bgc: "",
    };
  },
  mounted() {
    this.getTags();
    this.getPath();
  },
  watch: {
    $route: "getPath",
  },
  methods: {
    getPath() {
      this.bgc = this.$route.query.key;
    },
    go(key) {
      this.$router.push({
        path: `/article/${key}`,
        query: { key: key },
      });
      this.bgc = key;
    },
    getTags() {
      this.$api.getTags().then((res) => {
        let items = [];
        res.forEach((item) => {
          item.tag.forEach((i) => {
            items.push(i);
          });
        });
        let tagTool = items.reduce((pre, cur) => {
          if (cur in pre) {
            pre[cur]++;
          } else {
            pre[cur] = 1;
          }
          return pre;
        }, {});
        for (let key in tagTool) {
          let obj = { key: key, value: tagTool[key] };
          this.tagTool.push(obj);
        }
      });
    },
  },
};
</script>

<style lang='less'>
.tagBox {
  padding: 15px;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 260px;
  font-size: 14px;
  ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    li {
      border: 1px solid #ccc;
      height: 20px;
      margin: 4px 5px;
      padding: 6px 8px 3px 8px;
      border-radius: 3px;
      cursor: pointer;
      position: relative;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      &.active {
        color: #fff;
        background-color: #000;
        i {
          background-color: #000;
        }
      }

      i {
        position: absolute;
        font-size: 12px;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-weight: 700;
        top: -8px;
        right: -8px;
        border: 1px solid #ccc;
        border-radius: 50%;
        background-color: #fff;
      }
    }

    li:hover {
      color: #fff;
      background-color: #000;
      i {
        background-color: #000;
      }
    }
  }
}
</style>