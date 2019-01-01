import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict:true,
    state:{
        count: 0
    },
    getters:{
        money: state=> `￥${state.count*10000}元`
    },
    mutations:{
        // 修改数据
        increment(state){
            state.count++
        }
    },
    actions:{
        incrementAsync({commit}){
            setTimeout(()=>{
                commit('increment');
            },2000)
        }
    }
})