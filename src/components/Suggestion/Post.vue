<template>
<div class="post-wrapper">
        <div class="post">
            <div >
                <img class="img-wrapper" src="../../assets/bokor_pagoda.jpeg" alt="">
            </div>
            <div class="post-action-wrapper">
                <span class="idea-wrapper">
                    <input class="box" type="text" placeholder="Your Idea!">
                    <img src="../../assets/comment.png" alt="">
                </span>
            </div>
            <div class="place-tittle">
                <h2>Bokor</h2>
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
.idea-wrapper{
    width: 365px;
    display: flex;
    justify-content: space-between;
    margin-left: 5%;
    margin-right: 5%;
}
.post{
    width: 365px;
    margin-top: 40px;
}
.box {
    width: 278px;
    height: 25px;
    border-radius: 15px;
    border:1px solid #41B3A3;
}
.place-tittle {
    margin-top: 3%;
    margin-bottom: 2% ;
}
/* .post-wrapper{
    margin-left: 100px;
} */
</style>>

