<template>
  <Background>
    <div class="testPaper">
      <!-- Prompt是一个封装的提示框还可以优化 -->
      <Prompt :show="visible" textContent="没有填写用户名哦" />

      <h1 class="title"><span style="color:red">交通</span>真题卷</h1>
      <div class="splitLine">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>
      <div class="tips"><span>进入考场</span></div>
      <ul>
        <li>本套试卷共计10题</li>
        <li>题目答完即可知道正确答案</li>
        <li>测试结果仅供娱乐</li>
      </ul>
      <div class="inputWrapper">
        姓名: <input type="text" v-model="name" placeholder="请输入姓名">
      </div>
      <button class="start" @click="toAnswerSheet">
        开始答题
      </button>
    </div>
  </Background>
</template>

<script>
import Background from '../components/Background'
import Prompt from '../components/prompt'
export default {
  components: {
    Background,
    Prompt
  },
  data() {
    return {
      name: '',
      visible: false
    }
  },
  created() {
    this.name = localStorage.getItem('userName') || ''
  },
  methods: {
    toAnswerSheet() {
      if (this.name.length < 1) {
        this.visible = true
        const timeId = setTimeout(() => {
          this.visible = false
          window.clearTimeout(timeId)
        }, 2500)
      } else {
        localStorage.setItem('userName', this.name)
        this.$router.push({
          path: '/answerSheet',
        })
      }

    }
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
    display: flex;
    justify-content: center;
    font-size: 36px;
    margin-top: 20px;
  }
  .splitLine {
    color: gray;
    overflow: hidden;
    white-space: nowrap;
  }
  .tips {
    margin-top: 20px;
    margin-bottom: 20px;
    span {
      background: rgb(2, 113, 156);
      color: white;
      padding: 6px 5px;
      border-radius: 4px;
    }
  }
  ul {
    border: 1px solid red;
    padding-left: 20px;
    margin-bottom: 28px;
    li {
      font-size: 14px;
      padding: 3px 0;
    }
  }
  .inputWrapper {
    font-weight: 700;
    font-size: 28px;
    display: flex;
    align-content: center;
    input {
      padding: 0 10px;
      margin-left: 5px;
      border-radius: 4px;
      border: 1px solid gray;
    }
  }
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
}
</style>
