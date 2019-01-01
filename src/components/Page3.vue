<template>
  <div>
    <p>page3</p>
    <div>hello {{id}}!</div>
  </div>
</template>

<script>
export default {
  name: "Page3",
  created() {
    console.log(this.$route);
  },
  props:['id']
//   computed:{
//       name(){
//           return this.$route.params.id;
//       }
//   }
};
</script>

<style>
</style>
