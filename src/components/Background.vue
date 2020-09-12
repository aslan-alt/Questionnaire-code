<template>

  <div class="backgroundImg">
    <img id="mainImg" src="../assets/imgs/backgroundImg.jpg" alt="">
    <slot></slot>
  </div>

</template>

<script>

export default {



};
</script>

<style lang="scss" scoped>
.backgroundImg {
  display: flex;
  flex-direction: column;
  position: relative;
  #mainImg {
    max-width: 100vw;
  }
}
</style>
