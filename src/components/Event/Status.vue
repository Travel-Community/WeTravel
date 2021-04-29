<template>
  <span class="post-wrapper">
           <span>
           <img class="post-img" src="../../assets/jasmineRose.png" alt="">

           </span>
           <span >
               <input class="box" type="text" placeholder="Where do you want to go ?">
           </span>
           <span class="upload-photo">
               <button> Create</button>
           </span>
       </span>
</template>

<script>
export default {

}
</script>

<style scoped>
.post-wrapper{
    display: flex;
    justify-content: space-between;
    width: 656px;
    height: 35px;
    align-content: center;
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

