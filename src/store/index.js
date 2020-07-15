import Vue from 'vue'
import Vuex from 'vuex'
import socket from '../main'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kviz_id:null,
    work:false,
    type:true,
    answers:[],
    questions:[],
    galerija:[],
    events:[],
    eval:null,
    start:null,
    stop:null,
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
    joinQuiz({commit, state}){
      let obj={
        user:this.state.user.id,
        kviz:this.state.kviz_id
      }
      socket.emit('joinQuiz',obj)
    },
    submitQuiz({commit,state}){
      this.state.stop=Date.now();
      let period=this.state.stop-this.state.start;
      socket.emit('submitQuiz',this.state.answers,this.state.kviz_id,period)
      router.push('/home')
      this.state.kviz_id=null
      this.state.answers=[]
      this.state.questions=[]
    }
  },
  modules: {
  }
})
