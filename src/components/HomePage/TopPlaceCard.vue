<template>

          <div class="card-wrapper">
      <span >
          <h2 >#1. The  Safari</h2>
          <img class="first" src="../../assets/thesafari.jpeg" alt="">
      </span>
      
      
      <span >
          <h2 >#2. Kirirom</h2>
          <img class="second" src="../../assets/kirirom.jpeg" alt="">
      </span>
      
    <span>
        <h2 >#3. Mondulkiri</h2>
        <img class="third" src="../../assets/modulkiri.jpeg" alt="">

    </span>
      
  

  </div>
  

</template>

<script>
export default {

}
</script>

<style  scoped>

.card-wrapper{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top:250px ;
}
.first{
width: 536px;
height: 301px;


filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25));
border-radius: 10px;
}
.second{
width: 447px;
height: 238px;


filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25));
border-radius: 10px;
}
.third{
width: 371px;
height: 208px;


filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.25));
border-radius: 7px;
}
h2{
  text-align: center;
  margin-bottom: 20px;
}
</style>>

