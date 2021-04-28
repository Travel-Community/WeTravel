<template>
    <div class="container">
     <img class="profile" src="../../assets/profile_men2.jpeg" alt="">
        <button class="btn-edit">Edit Profile</button>
      <div class="element-wrapper">
        <h1>Profile Setting</h1>
        <div class="element">
          <div class="input-groups">
              <label for="text"> First Name : </label>
              <input type="text" id="create-date" name="text">
            </div>
            <div class="input-groups">
              <label for="text"> Surname : </label>
              <input type="text" id="create-date" name="text">
            </div>
            <div class="input-groups">
              <label for="text"> Sex : </label>
              <input type="text" id="create-date" name="text">
            </div>
            <div class="input-groups">
              <label for="text"> Email Address : </label>
              <input type="text" id="create-date" name="text">
            </div>
            <div class="input-groups">
              <label for="text"> Telephone : </label>
              <input type="text" id="create-date" name="number">
            </div>
              <div class="input-groups">
              <label for="date">  Date of Birth : </label>
              <input type="date" id="birth" name="date">
            </div>
            <div class="action-wrapper">
            <button type="submit" id="btn-edit" class="btn btn-success">Edit</button>
            <button type="button" id="btn-delete" class="btn">Delete Account</button>
          </div>
        </div>
      </div>

    </div>


</template>
<script>
export default {

}
</script>
<style scoped>

.container{
  display: flex;
  border: 5px;
  background-color: skyblue;
  width: 1000px;
  margin: 200px 60px;
  padding: 200px 60px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.75);
  
  
}
.profile{
  
  width: 200px;
  height: 200px;
  border-radius: 200px;
  margin: 0 52px;
  
}
.btn-edit{
  position: absolute ;
  margin: 210px 90px;
  padding: 6px 20px;
  border: 1px solid skyblue;
  border-radius: 5px;
} 
.element-wrapper{

  background-color: white;
  margin: -200px 25px;
  padding-right: 55px;
  padding-left: 20px;
  border-radius: 10px;


}
#create-date{
  padding: 15px 250px;
  text-align: left;
  margin-bottom: 5px;
 
  border: 1px solid skyblue;
  
}
#birth{
  padding : 13px 255px;
  text-align: left;
  margin-bottom: 5px;
  border: 1px solid skyblue;
}
.action-wrapper {
  display: flex;
  justify-content: space-evenly;
  margin-right: 20px;
    margin-top: 25px;
    text-align: right ;
  }
.btn {
    background-color: rgb(233, 59, 59);
    color: white;
    border: none;
    padding: 8px 20px;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    border-radius: 6px;
  }
  
  .btn:hover {
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.75);
    opacity: 0.8;
  }
  
  .btn:active {
    transform: scale(0.7);
  }
  
  .btn.btn-success {
    background-color: skyblue;
    color: white;
  }
  
</style>