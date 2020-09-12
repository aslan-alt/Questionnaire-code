<template>
  <Background>
    <div class="testPaper">
      <div class="info">
        <p>姓名:<span>{{userName}}</span></p>
        <p>准考号: <span>{{admissionNumber}}</span></p>
      </div>
      <div class="splitLine">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div>
      <table>
        <tr>
          <td>
            题目
          </td>
          <td>一</td>
          <td>二</td>
          <td>三</td>
          <td>四</td>
          <td>五</td>
        </tr>
        <tr>
          <td>
            成绩
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <h1 class="title"><span>2020安全出行模拟卷</span></h1>
      <div class="item">
        <p class="question">
          {{`${currentQuestion+1}. ${list[currentQuestion].question}`}}
        </p>
        <img class="schematicDiagram" v-if=" 'imgName' in list[currentQuestion]" src="../assets/imgs/schematicDiagram.jpg" alt="">
        <div v-for="(value, name, index) in list[currentQuestion].Options" :key="index">
          <div class="radios">
            <label>
              <input type="checkbox" :value="name" v-model="picked"> {{name}}.
              {{value}}
            </label>
          </div>
        </div>
      </div>

      <div class="next" v-if="show">
        <p style="color:green" v-if="right">优秀！回答正确</p>
        <p v-else style="color:red">回答错误！！！正确答案:{{`${list[currentQuestion].answer.toString()}`}}</p>
        <div class="buttonWrapper"><button @click="next">继续答题</button></div>
      </div>
      <div class="selected" v-else>
        <div class="buttonWrapper"><button @click="determine">确定</button></div>
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
      list: [],
      currentQuestion: 0,
      picked: [],
      right: false,
      show: false,
      admissionNumber: parseInt(Math.random() * 1000000),
      userName: ''
    }
  },

  created() {
    this.list = this.$store.getters.getQuestion
    this.userName = localStorage.getItem('userName')

  },

  methods: {
    next() {
      if (this.currentQuestion < this.list.length - 1) {
        this.currentQuestion += 1
        this.picked = []
        this.show = false
        this.right = false
      } else {
        this.$router.push({
          path: '/result',
        })
      }
    },
    determine() {
      if (this.picked.length > 0) {
        const answer = this.list[this.currentQuestion].answer.toString()
        const selectedAnswer = this.picked.toString()
        if (selectedAnswer === answer) {
          const score = this.$store.getters.getScore + 10
          this.$store.commit('changeScore', score)
          this.right = true
        } else {
          this.right = false
        }
        this.show = true
        this.$store.commit('addReply', this.picked)
        this.$nextTick(() => {
          window.scrollTo(0, 99999);
        })

      }
    }
  }
};
</script>

<style lang="scss" >
.testPaper {
  position: absolute;
  height: 100vh;
  width: 90vw;
  background: rgba(255, 255, 255, 0.65);
  left: 5vw;
  padding: 50px 10px 0px 10px;
  .splitLine {
    color: gray;
    overflow: hidden;
    white-space: nowrap;
  }
  .schematicDiagram {
    max-width: 60%;
    margin-bottom: 5px;
  }
  .item {
    padding: 0 10px;
    .question {
      margin-bottom: 10px;
      font-weight: 800;
    }
    .radios {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
  table {
    border-collapse: collapse; /*相邻边被合并;separate: 边框独立*/
    border: none;
    width: 100%;
    margin-top: 30px;
  }
  td {
    border: 2px solid black;
    text-align: center;
  }
  .info {
    display: flex;
    justify-content: space-between;
    color: gray;
    margin-bottom: 20px;
    span {
      color: black;
    }
  }
  .title {
    font-size: 16px;
    margin: 20px 0;
    span {
      background: black;
      color: white;
      padding: 4px 12px;
      border-radius: 4px;
    }
  }
  .selected {
    padding: 40px 0;
    display: flex;
    justify-content: center;

    button {
      padding: 10px 20px;
      border-radius: 4px;
      background: rgb(2, 113, 156);
      color: white;
      font-size: 16px;
      border: none;
    }
  }
  .next {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 40px;
    align-items: center;

    p {
      margin-bottom: 10px;
    }
    .buttonWrapper {
      display: flex;
      justify-content: center;
      button {
        padding: 10px 20px;
        border-radius: 4px;
        background: rgb(2, 113, 156);
        color: white;
        font-size: 16px;
        border: none;
      }
    }
  }
}
</style>
