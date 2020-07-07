import Vue from 'vue'
import Vuex from 'vuex'
import socket from '../main'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    work:false,
    type:false,
    answers:[],
    questions:[],
    galerija:[],
    events:[],
    eval:null,
    loading:false,
    user:JSON.parse(localStorage.getItem('user'))==null ? {} : JSON.parse(localStorage.getItem('user'))
  },
  mutations: {
    
  },
  actions: {
    signUp({commit,state},user){
      socket.emit('signUp',user)
    },
    evaluate({commit,state},code){
      socket.emit('receiveEval',code)
    },
    login({commit, state},ele){
      console.log('Ele is');
      console.log(ele);
      socket.emit('login',ele)
    },
    logout({commit, state}){
      socket.emit('logout',this.state.user)
    },
    sponsors({commit, state},type){
      socket.emit('sponsors',type)
    },
    events({commit, state}){
      socket.emit('eventsReq')
    },
  },
  modules: {
  }
})
