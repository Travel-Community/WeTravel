<template>
  <div class="home">
    <NavBar/>
    <div class="wrapper">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'ShareExperience'}">Share Experience</router-link>
    </div>
   
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.wrapper{
  padding:200px ;
}
</style>