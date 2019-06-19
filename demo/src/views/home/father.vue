<template>
  <div class="father">
    <div>
      <button class="button" @click="show = !show">父组件动画效果</button>
      <transition name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight">
        <div class="box" v-if="show">
          <div>
            {{message}}
          </div>
          <button class="button" @click="sendToChild">父传子</button>
        </div>
      </transition>
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
      toChild: '',
      show: true
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

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
