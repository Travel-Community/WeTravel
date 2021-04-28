<template>
    <div class="login-form">
        <div class="logo">   
            <img src="../assets/logo-nav.png" alt="">
        </div>
        <div class="input-container">
            <div class="email">
                <p class="head-box">Email:</p>
                <input class="input-box" type="text">
            </div>
            <div class="password">
                <p class="head-box">Password:</p>
                <input class="input-box" type="text">
            </div>
            <p class="forget-password">forget password ?</p>
            <div class="login">
                <button class="login-btn">Login</button>
            </div>
            <p class="login-with">or login with</p>
            <div class="login-more">
                <img class="more-ggl" src="../assets/google-plus.svg"  alt="Too">
                <img class="more-fb" src="../assets/facebooks.png"  alt="Too">
            </div>
            
        </div>
        <p class="or" >or</p>
        <h4 class="register">Register?</h4>
    </div>
    
</template>

<script>

export default {
    
}
</script>

<style scoped>
.login-form {
    width: 45%;
    height: 542px;
    border-radius: 20px;
    border:1px solid #41B3A3;
    margin: auto;
    box-shadow: 1px 3px 6px #929292;
}
.logo {
    margin-top: 5%;
    text-align: center;
}

.head-box {
    font-size: 16px;
}

.input-box {
    height: 34px;
    width: 100%;
    border-radius: 10px;
    border:1px solid #41B3A3;
    box-shadow: 1px 3px 6px #929292;
}

.email {
    text-align: left;
}

.password {
    margin-top: 20px;
    text-align: left;
}

.input-container {
    margin: auto;
    width: 50%;
}

.forget-password {
    margin-top: 8px;
    text-align: right;
    font-size: 15px;
}

.login-btn {
    background-color: #41B3A3;
    border:1px solid #41B3A3;
    border-radius: 10px;
    color: white;
    width: 100px;
    height: 34px;
}

.login {
    text-align: center;
    margin-top: 25px;
}

.login-with {
    text-align: center;
    margin-top: 20px;
    font-size: 13px;
}
.login-more {
    margin-top: 15px;
    display: flex;
    justify-content: center;
}
.more-ggl {
    width: 30px;
}
.more-fb {
    width: 30px;
    margin-left: 10px;
}

.or {
    text-align: center;
    margin: 15px;
    font-size: 14px;
}
.register {
    color: rgb(49, 116, 241);
    text-align: center;
    font-size: 18px;
}



</style>