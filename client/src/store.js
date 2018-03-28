import Vue from 'vue'
import Vuex from 'vuex'
// let axios = require('axios').create({
//   baseURL: 'http://localhost:3000/'
// })

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    userId: localStorage.getItem('userId'),
    userData: localStorage.getItem('username')
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload
    },
    setUserId (state, payload) {
      state.userId = payload
    },
    setUserData (state, payload) {
      state.userData = payload
    }
  },
  actions: {
  // buat axios
    setToken ({commit}, payload) {
      commit('setToken', payload)
    },
    setUserId ({commit}, payload) {
      commit('setUserId', payload)
    },
    setUserData ({commit}, payload) {
      commit('setUserData', payload)
    }

  }
})

export default store
