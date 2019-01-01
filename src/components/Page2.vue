<template>
    <div>
        <p>
            你的银行卡余额还有{{count}}万
        </p>
        <p>
            你的银行卡余额还有{{money}}万
        </p>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    created(){
        // setInterval(()=>{
        //     this.$store.commit('increment')
        // },2000)
        // this.$store.dispatch('incrementAsync')
        this.incrementAsync()
    },
    computed:{
        // count(){
        //     return this.$store.state.count
        // },
        ...mapState({
            count: state => state.count
        }),
        money(){
            return this.$store.getters.money
        }
    },
    methods:{
        ...mapActions(['incrementAsync'])
    }
}
</script>

<style>

</style>
