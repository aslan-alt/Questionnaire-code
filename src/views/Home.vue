<template>

  <Background>
    <div>
      <div class="content">
        <p>有关安全出行的交通规则</p>
        <p>你都还记得吗?</p>
        <p>你的出行是否遵守交通规则</p>
        <p>是否曾经迷茫的站在十字路口</p>
        <p>不知该去何方</p>
        <p>跟着我们一起</p>
        <p>答题涨知识~</p>
      </div>
      <button class="start">
        <router-link to="/userInfo">开始挑战答题</router-link>
      </button>
    </div>
  </Background>

</template>

<script>
import Background from '../components/Background'

export default {
  components: {
    Background
  }


};
</script>

<style lang="scss" scoped>
.start {
  position: absolute;
  width: 150px;
  height: 36px;
  border-radius: 4px;
  background: rgb(2, 113, 156);
  left: 50%;
  margin-left: -75px;
  top: 75%;
  color: white;
  font-size: 16px;
  border: none;
  a {
    text-decoration: none;
    color: white;
  }
}
.content {
  position: absolute;
  color: red;
  width: 300px;
  left: 50%;
  margin-left: -150px;
  top: 25%;
  p {
    text-align: center;
    margin-bottom: 8px;
    font-size: 16px;
  }
}
</style>
