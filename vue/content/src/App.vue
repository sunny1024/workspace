<template>
  <div id="app">
    <ul>
      <div v-if="goods.length > 0">
        <li v-for="(item, index) in goods" :key="index">
          {{ item.name }}：
          <input v-model="item.price" />
          <button @click="deleteGood(index)">删除</button>
        </li>
      </div>
      <div v-else>暂无商品信息</div>
      <hr />
      <li>
        上架商品：
        <input v-model="newGood.name" placeholder="请输入商品名称" />
        <input v-model="newGood.price" placeholder="请输入价格" />
        <button @click="addGood(newGood)">点击上架</button>
      </li>
    </ul>
    <p>价格信息：</p>
    <ul class="goods-info">
      <li v-for="(item, index) in goods" :key="index">
        {{ item.name }}的价格：
        <span class="price">{{ item.price }}</span>
      </li>
      <li style="font-size: 18px;">总价：{{ totalPrice }}元</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  // props: ["name", "age", "xxx"],
  // props: {
  //   name: String,
  //   age: Number
  // },
  props: {
    name: {
      type: String,
      defalt: function() {
        return "Zhanglei";
      }
    },
    age: {
      type: Number,
      defalt: 18
    }
  },
  data() {
    return {
      newGood: { name: "", price: null },
      goods: [
        { name: "商品1", price: 0 },
        { name: "商品2", price: 0 }
      ]
    };
  },
  methods: {
    addGood(newGood) {
      this.goods.push(newGood);
    },
    deleteGood(index) {
      this.goods.splice(index, 1);
    }
  },
  computed: {
    // 计算属性
    totalPrice: function() {
      let total = 0;
      this.goods.forEach(item => {
        total += +item.price;
      });
      return total;
    }
  }
};
</script>

<style scoped>
#app {
  width: 600px;
  border: 1px solid #ccc;
  margin: 0 auto;
}
.goods-info li {
  list-style: none;
}
.goods-info li .price {
  color: red;
  font-size: 16px;
}
.goods-info li .price::after {
  content: "元";
}
</style>
