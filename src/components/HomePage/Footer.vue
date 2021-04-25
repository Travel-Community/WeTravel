<template>
<div class="footer">
    <span class="text-wrapper">
        <h2>About WeTravel</h2>
        <h2 class="contact">Contact Us :</h2>
    </span>
    <span class="wrapper">
        <span class="term-wrapper">
        <img src="../../assets/logo-foot.png" alt="">
        <span class="term">
            
       <h6 ><fa icon="copyright"/>  2021 WeTravel All rights reserved.</h6> 
        <h5 >Terms of Use  Privacy and Cookies Statement</h5>
        </span>
        
        </span>
        <span >
       <p>Email : www.wetravel.com.kh</p> 
       <p>Telephone : 096 779 6624</p>

        </span>
    </span>
    

<span class="last">
    <span>
        <h5>This is the version of our website addressed to speakers of English in the United States. </h5>
        <h5>please select the appropriate version of Tripadvisor for your country or region in the drop-down menu.</h5>
    </span>
   <span class="logo-wrapper">
        <img  src="../../assets/facebook.png" alt="">
        <img src="../../assets/ig.png" alt="">
        <img src="../../assets/twitter.png" alt="">
    </span>
</span>
</div>
</template>

<script>
export default {

}
</script >

<style scoped>
.footer{
height: 190px;
margin-top: 50px;
color:white;
background: #40B3A2;

}
.logo-wrapper{
width: 170px;
display: flex;
justify-content: space-between;
}
.logo-wrapper>img{
    width: 40px;
    height: 40px;
}
.text-wrapper{
    display: flex;
    justify-content: space-around;
    margin-right:150px ;
    padding-top: 20px;
}
.wrapper{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.term-wrapper{
    width: 420px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}
.last{
    display: flex;
    justify-content: space-around;
    margin-left: 33px;
    margin-top: 20px;
}

h5,h6{
    font-weight:200 ;
}
.term-wrapper>span>h5{
    text-decoration: underline;
}
.contact{
    margin-left: 180px;
}
.term{
    margin-top:20px ;
}
</style>>

