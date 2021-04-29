<template>
<div>
  <div class="nav sh1">
      <div>
          <router-link :to="{name:'Home'}">
    <img class="logo-nav" src="../../assets/logo-nav.png" alt="">

          </router-link>

      </div>
    <div class="text-wrapper">
      <router-link :to="{name:'Suggestion'}"><h3>Suggestion</h3></router-link>
      <router-link :to="{name:'Event'}"><h3>Event</h3></router-link> 
      <router-link :to="{name:'ShareExperience'}"><h3>Share Experience</h3></router-link>
    </div>
    <router-view/>

    <div class="profile-wrapper">
      <router-link :to="{name:'Profile'}"> <img src="../../assets/jasmineRose.png" alt=""></router-link>
      <p>Jasmine Rose</p>
    </div>
   </div>
   
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.nav{
display: flex;
justify-content: space-between;
height: 60px;
left: 0px;
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
    margin-top: 5px;
}


.profile-wrapper>p{
    margin-top: 20px;

}

  

</style>

