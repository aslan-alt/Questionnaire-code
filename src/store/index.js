import Vue from 'vue'
import Vuex from 'vuex'
import question from '../helper/dataSource'
console.log(question)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question,
    reply: [],
    score: 0,
    userName: ''
  },
  getters: {
    getQuestion: (state) => {
      return state.question
    },
    getReply: (state) => {
      return state.reply
    },
    getScore: (state) => {
      return state.score
    },

  },
  mutations: {
    addReply(state, reply) {
      // 变更状态
      state.reply = [...state.reply, reply]
    },
    changeScore(state, score) {
      // 变更状态
      state.score = score
    }
  },
  actions: {
  },
  modules: {
  }
})
