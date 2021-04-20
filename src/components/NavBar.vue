<template>
  <div class="nav">
    
      <div class="nav-wrapper">
        <div class="img-wrapper">
        <img src="../assets/logo.png" alt="">

        </div>
        <div class="category-wrapper" >
          <h4>Suggestion</h4>
         <h4>Event</h4>
         <router-link :to="{name:'ShareExperience'}"><h4>Share Experience </h4> </router-link>  
        </div>
       <div class="btn-wrapper" >
        <button>Register</button>
        <button>help</button>
       </div>
        
      </div>
      
       
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
    position: absolute;
    width:1440px ;
    height: 60px;
    box-shadow: 0 5px 5px -5px;
    
}
img{
  width: 171px;
  height: 58px;
}
.nav-wrapper{
display: flex;
justify-content: space-between;
align-content: center;
align-items: center;
}
.img-wrapper,.category-wrapper,.btn-wrapper{
  display: flex;
  justify-content: space-evenly;
}
button{
  background-color: #41B3A3;
  color: white;
  width: 100px;
  height: 34px;
  border-radius: 10px;
  border-style:none;
}
</style>>

