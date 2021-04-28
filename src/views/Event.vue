<template>
  <div class="Event">
    
    <NavBar/>
    <div class="post">
      <span class="post-wrapper">
      <Join/>
      
      
      </span>
    </div>
    <div class="post">
      <div>
  <span class="post-wrapper">
      <Join/>
      
      </span>
      </div>
    
    </div>
  </div>

</template>    
<script>
import NavBar from '../components/Event/NavBar'
import Join from '../components/Event/Join'
export default {
  components: {
    NavBar,Join

  }
}
</script>
<style  scoped>
.post{
  margin-top: 20px;
  margin-left: 200px;

}
.post-wrapper{
  display: flex;
  justify-content: space-evenly;
  width: 1200px;
}
</style>>