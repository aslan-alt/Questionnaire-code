<template>
  <Background>
    <div class="testPaper">
      <h2 class="title">{{evaluation}}</h2>
      <div class="score">
        <div class="scoreText">
          <span>{{getScore}}分</span>
        </div>
      </div>
      <div class="tips"><span>福利时刻</span></div>
      <div class="contentWrapper">
        <div class="content">
          <p>亲</p>
          <p>愿你自立到独当一面</p>
          <p>愿你自律如日出日落</p>
          <p>愿你自强而不息不止</p>
          <p>扫描下载注册云闪付</p>
        </div>
        <div class="qrcode">
          <img src="../assets/imgs/default.png" alt="">
        </div>
      </div>
    </div>

  </Background>
</template>

<script>
import Background from '../components/Background'
export default {
  components: {
    Background
  },
  data() {
    return {
      getScore: 0,
    }
  },
  created() {
    this.getScore = this.$store.getters.getScore

  },
  computed: {
    evaluation() {
      const { getScore } = this
      if (getScore <= 30) {
        return '哎呀，看来还是需要补充知识呀！'
      } else if (getScore < 60 && getScore > 40) {
        return '哎呀，看来还是需要补充知识呀！'
      } else if (getScore < 80 && getScore > 60) {
        return '哇哦，下一个城市文明之星就是你。'
      } else {
        return '真的很棒呀！快来看看你的奖励吧！'
        //if (getScore > 80)
      }
    }
  },
  methods: {




  }

};
</script>

<style lang="scss" scoped>
.testPaper {
  position: fixed;
  height: 100vh;
  width: 90vw;
  background: rgba(255, 255, 255, 0.65);
  left: 5vw;
  padding: 120px 10px 0px 10px;
  .title {
    font-size: 18px;
    margin: 20px 0;
    color: red;
    text-align: center;
    span {
      background: black;
      color: white;
      padding: 4px 12px;
      border-radius: 4px;
    }
  }
  .score {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    .scoreText {
      border: 1px solid red;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 28px;
        color: red;
      }
    }
  }
  .tips {
    margin-bottom: 20px;
    span {
      background: red;
      color: white;
      padding: 6px 5px;
      border-radius: 4px;
    }
  }
  .contentWrapper {
    display: flex;

    .content,
    .qrcode {
      flex-grow: 1;
      width: 50%;
      img {
        max-width: 100%;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      span {
        font-size: 14px;
      }
      p {
        font-size: 14px;
        padding: 5px 0;
        text-align: center;
      }
    }
  }
}
</style>
