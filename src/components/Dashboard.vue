<template>
  <div>
    <router-link to="/dashboard/page1">页面1</router-link>|
    <router-link to="/dashboard/page2">页面2</router-link>|
    <router-link to="/dashboard/page3/vuejs">Vue</router-link>|
    <router-link to="/login">Login</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name:''
}
</script>

<style>
</style>
