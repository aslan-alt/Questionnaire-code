<template>
  <div class="prompt" v-if="show">{{textContent}}</div>
</template>

<script>

export default {

  props: {
    show: {
      type: Boolean,
      default: false
    },
    textContent: {
      type: String,
      default: '提示信息'
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes prompt {
  0% {
    top: -30px;
  }
  100% {
    top: 0px;
  }
}
.prompt {
  border: 1px solid red;
  position: fixed;
  width: 100%;
  text-align: center;
  background: red;
  left: 0;
  top: 0;
  color: white;
  padding: 6px 0;
  animation: prompt 0.5s linear;
}
</style>
