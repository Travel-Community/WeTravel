<template>
<div class="post-wrapper">
        
        <div class="post">
            <div class="profile-wrapper">
                <img class="profile" src="../../assets/chantevy.png" alt="">
                <p class="name">Sok Chantevy</p>  
            </div>  
            <div >
                <img class="img-wrapper" src="../../assets/joinUs.jpeg" alt="">
            </div>
            
            <div>
                <p class="text-caption">I want to camping at Kirirom on Friday 24 october 2021
                    who interest to camping at Kirirom please join me!!!</p>
                    <button class="join-btn">Join</button>
            </div>
        </div>
  
  </div>

</template>

<script>
export default {

}
</script>

<style  scoped>

.profile{
    width: 30px;
    height: 30px; 
;}
.profile-wrapper{
    display: flex;
    align-items: center;
    margin-bottom:5px ;
}
.name{
    margin-left: 5px;
      font-weight: bold;

}
.img-wrapper{
    width: 365px;
    height: 275px;
    border-radius: 10px;
}

.post{
    width: 365px;
    margin-top:40px ;
}
.join-btn{
    background-color: #41B3A3;
    color: white;
    border-style: none;
    width: 126px;
    height: 34px;
    border-radius: 10px;
    margin-top:30px ;
}
.text-caption{
    margin-top: 20px;
}

</style>>

