<template>
  <div class="child">
    <div>
      {{message}}
    </div>
    <button class="button" @click="sendToFather">子传父</button>
  </div>
</template>

<script>
export default {
  props: ['toChild'],
  data () {
    return {
      message: '我是子组件'
    }
  },
  watch: {
    toChild (val) {
      this.message = val
    }
  },
  methods: {
    sendToFather: function () {
      this.$emit('getChildData', '我是子组件传给父组件的值')
    }
  }
}
</script>

<style scoped>
  .child {
    width: 200px;
    height: 100px;
    border: 1px solid;
    margin: 50px auto 0;
    overflow: hidden;
  }
  .button {
    margin: 20px;
    overflow: hidden
  }
</style>
