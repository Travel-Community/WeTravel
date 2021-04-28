<template>
<div>
  <div class="nav">
      <div>
          <router-link :to="{name:'Home'}">
    <img class="logo-nav" src="../../assets/logo-nav.png" alt="">

          </router-link>

      </div>
    <div class="text-wrapper">
      <h3>Suggestion</h3>
      <h3 class="color-event">Event</h3>
      <h3>Share Experience</h3>
    </div>
    <div class="profile-wrapper">
      <img src="../../assets/jasmineRose.png" alt="">
      <p>Jasmine Rose</p>
    </div>
   </div>
   <div class="timeline-wrapper">
       <span class="timeline">
           <h2>Timeline</h2>
           <h3 class="color-all">All</h3>
           <h3>Newest</h3>
           <h3>Popular</h3>
       </span>
       <span class="post-wrapper">
           <span>
           <img class="post-img" src="../../assets/jasmineRose.png" alt="">

           </span>
           <span >
               <input class="box" type="text" placeholder="Share your experience here...!!">
           </span>
           <span class="upload-photo">
               <button><img src="../../assets/photo.png" alt=""> Photo</button>
           </span>
       </span>
   </div>
</div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.color-all{
  color: #41B3A3;
}
.nav{
display: flex;
justify-content: space-between;
width: 1400px;
height: 60px;
left: 0px;
top: -1px;

}
.color-event{
  color: #41B3A3;
}
.logo-nav{
  width: 170px;
    height: 60px;
}
.text-wrapper{
    width: 463px;
    height: 25px;
    display: flex;
    justify-content: space-between;
}
.profile-wrapper{
    width: 155px;
    height: 46px;
    display: flex;
    justify-content: space-between;
}
.timeline-wrapper{
    margin-top: 50px ;
    width: 1122px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    
}
.post-wrapper{
    display: flex;
    justify-content: space-between;
    width: 656px;
    height: 35px;
}
.box{
    width: 474px;
    height: 35px;
    border:1px solid #41B3A3;
    border-radius:10px ;
}
button{
    width: 102px;
    height: 35px;
    background-color: #41B3A3;
    border-style:none ;
    color: white;
    border-radius: 10px;
     display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size:1.1em ;
}
.post-img{
    width: 35px;
}
h2{
    text-decoration: underline;
}
</style>>

