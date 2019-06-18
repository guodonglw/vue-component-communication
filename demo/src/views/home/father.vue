<template>
  <div class="father">
    <div>
      <div class="box">
        <div>
          {{message}}
        </div>
        <button class="button" @click="sendToChild">父传子</button>
      </div>
      <child :toChild = 'toChild' @getChildData = 'getChildData'></child>
    </div>
  </div>
</template>

<script>
import Child from './components/child'

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
    sendToChild: function () {
      this.toChild = '我是父组件传给子组件的值'
    },
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
