<template>
  <div class="father">
    <div>
      <div class="box">
        <div>
          {{message}}
        </div>
        <button class="button" @click="sendToChild">父传子</button>
      </div>

      <!--调用子组件，并绑定要传给子组件的参数，并指定接收子组件传值的方法-->
      <child :toChild = 'toChild' @getChildData = 'getChildData'></child>
    </div>
  </div>
</template>

<script>
import Child from './components/child'  // 该处引入子组件

export default {
  components: {
    Child
  },
  data () {
    return {
      message: '我是父组件',
      toChild: ''
    }
  },
  methods: {
    // 传值到子组件的函数
    sendToChild: function () {
      this.toChild = '我是父组件传给子组件的值'
    },
    // 接收子组件传值的函数
    getChildData: function (val) {
      this.message = val
    }
  }
}
</script>

<style scoped>
  .father {
    width: 100%;
    height: 100%;
    margin: 0 auto 0;
    overflow: hidden;
  }
  .box {
    width: 200px;
    height: 100px;
    border: 1px solid;
    margin: 15% auto 0;
    overflow: hidden;
  }
  .button {
    margin: 20px;
    overflow: hidden;
  }
</style>
