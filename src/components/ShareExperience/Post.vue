<template>
<div class="post-wrapper">
        
        <div class="post">
            <div class="profile-wrapper">
            <img class="profile" src="../../assets/jasmineRose.png" alt="">
                <p class="name">Sok Chantevy</p>  
            </div>  
            <div >
                <img class="img-wrapper" src="../../assets/joinUs.jpeg" alt="">
            </div>
            <div class="post-action-wrapper">
                <span class="react-wrapper">
                    <img src="../../assets/love.png" alt="">
                    <img src="../../assets/dislove.png" alt="">
                    <img src="../../assets/comment.png" alt="">
                </span>
                <span >
                    <img src="../../assets/more.png" alt="">
                </span>
            </div>
            <div>
                <p>The weather outside is cool and crisp. You're snuggled up by the bonfire with all your friends, roasting marshmallows, and laughing about inside jokes. All of this is happening while you're wrapped in the coziest blanket on earth. Sounds dreamy, right? </p>
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
.post-action-wrapper{
    width: 360px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
.post-action-wrapper>span>img{
width: 24px;
height: 22px;
}
.react-wrapper{
    width: 200px;
    display: flex;
    justify-content: space-between;
}
.post{
    width: 365px;
}
/* .post-wrapper{
    margin-left: 100px;
} */
</style>>

