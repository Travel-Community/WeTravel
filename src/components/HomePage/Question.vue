<template>
<div class="question-wrapper">
    
        <span class="climb">
        <img src="../../assets/climb.png">
        </span>
       
        <span class="cloud"><img  src="../../assets/cloud.png"></span>
         <span class="text">
        <h1>Where do you want to </h1><h1 class="go">go?</h1> 

        </span> 
             
</div>
  
</template>

<script>
export default {

}
</script>

<style  scoped>

.cloud{
    position: absolute;

margin-left:385px ;
margin-bottom:100px ;
}
.text{
    position: absolute;
    display: flex;
    width: 400px;
    margin-left:30px ;
    margin-top:70px ;
}
.climb{
    position: absolute;
    margin-top: 62px;
    margin-right:380px ;
    
}


.go{
    color: #41B3A3;
    margin-left:10px ;
}
.question-wrapper{

    display: flex;
    justify-content: center;
    margin-top: 40px;
}
</style>>

