<template>
<div>
  <div class="nav sh1">
      <div>
          <router-link :to="{name:'Home'}">
        <img class="logo-nav" src="../../assets/logo-nav.png" alt="">

          </router-link>

      </div>
      
    <div class="text-wrapper" >
      <router-link :to="{name:'Suggestion'}"><h3>Suggestion</h3></router-link>
      <h3>Event</h3>
      <router-link :to="{name:'ShareExperience'}"><h3>Share Experience</h3></router-link>
      
    </div>
    <div class="profile-wrapper">
      <router-link :to="{name:'LogIn'}"><button>Register</button></router-link>
      <button><fa icon="question-circle"/> Help</button>
    </div>
   </div>
   
</div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.nav{
display: flex;
justify-content: space-between;
height: 60px;
}
.logo-nav{
  width: 170px;
    height: 60px;
    margin-left: 20px;
}
.text-wrapper{
    width: 463px;
    height: 25px;
    display: flex;
    justify-content: space-between;
    margin-top:20px ;
}
.profile-wrapper{
    width: 155px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    margin-right:30px ;
    margin-top:15px ;
}

button{
  color: white;
  background-color: #41B3A3;
  border-style: none;
  border-radius: 5px;
  width: 60px;
  height: 30px;
}


</style>

