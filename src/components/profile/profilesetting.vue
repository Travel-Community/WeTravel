<template>
<w-app>

<w-flex align-center justify-center >
  <div class="profile-wrapper sh3">
    <w-flex justify-end>
      <div class="profile-img">
        <w-flex column align-center justify-space-between>
            <span>
            <img src="../../assets/profileSetting.png" alt="">
          </span>
          <span>
              <button class="edit-btn">Edit Picture</button>
          </span>
        </w-flex>
      </div>
          <div class="profile-setting">
            <div class="profile-setting-wrapper">

              <h1>Profile Setting</h1>
                <div class="name-wrapper">
                  <span>
                      <h4>First Name:</h4>
                    <input type="text" placeholder="Jasmine">
                  </span>
                  <span>
                      <h4>Surname:</h4>
                      <input type="text" placeholder="Rose">
                  </span>
                </div>

                <div class="name-wrapper">
                  <span>
                      <h4>Date of Birth:</h4>
                    <input type="text" placeholder="20 Mar 2000">
                  </span>
                  <span>
                      <h4>Sex:</h4>
                      <input type="text" placeholder="Female">
                  </span>
                </div>

                <div class="telephone-wrapper">
                  <span>
                    <h4>Telephone:</h4>
                    <input type="text" placeholder="012345678">
                  </span>
                </div>

                <div class="email-wrapper">
                  <span>
                    <h4>Email Address:</h4>
                    <input type="text" placeholder="jasminerose@gmail.com">
                  </span>
                </div>

                <div class="btn-wrapper">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
             </div>

        </div>
    </w-flex>
    
  </div>
</w-flex>
 </w-app>

</template>

<script>
export default {

}
</script>

<style scoped>

.wrapper{
  float: center;
}
  .profile-wrapper{
    width: 950px;
    height: 560px;
    background-color: #41B3A3;
    border-radius: 20px;
  }
  .profile-img{
    margin-right:110px ;
    margin-top:130px ;
  }
  .edit-btn{
    width: 133px;
    height: 29px;
    border-radius: 15px;
    margin-top:10px ;
    border-style:none ;

  }
  .profile-setting{
    width: 550px;
   height: 560px;
   background-color: white;
   border-radius: 20px;
  }
.profile-setting-wrapper{
  margin:50px ;
}
  
 .name-wrapper,.telephone-wrapper{
   display: flex;
   justify-content: space-between;
   margin-top:30px ;
 }
 .email-wrapper,.btn-wrapper{
      margin-top:30px ;

 }
 .name-wrapper>span>input,.telephone-wrapper>span>input{
   width: 205px;
   height: 34px;
   border-radius:10px ;
   border:1px solid #41B3A3;
   text-align: center;
 }
 .email-wrapper>span>input{
   width: 455px;
   height: 34px;
   border-radius:10px ;
   border:1px solid #41B3A3;
   text-align: center;
 }
 .btn-wrapper{
   display: flex;
   justify-content: space-between;
   width: 216px;
   height: 26px;
   float:right ;
 }
 .btn-wrapper>button:nth-child(1){
   width: 97px;
   height: 29px;
   background-color: #41B3A3;
   color: white;
   border-style:none ;
   border-radius:10px ;
 }
 .btn-wrapper>button{
  background: #BB3737;
  border-radius: 10px;
  width: 109px;
  height: 29px;
  color: white;
  border-style:none ;

   }
</style>