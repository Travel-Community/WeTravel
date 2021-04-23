<template>
  <w-app id="app">
  <header>
      <NavBar  />
</header>
  <main class="grow">
      <div class="question">
        <QuestionVue/>

      </div>
      <div>
          <TopPlaceCardVue/>
      </div>
      <div>
          <DescriptionVue/>
      </div>
      </main>
  <footer >
      <FooterVue/>
  </footer>
</w-app>
</template>

<script>
import DescriptionVue from '../components/HomePage/Description.vue'
import FooterVue from '../components/HomePage/Footer.vue'
import NavBar from '../components/HomePage/NavBar'
import QuestionVue from '../components/HomePage/Question.vue'
import TopPlaceCardVue from '../components/HomePage/TopPlaceCard.vue'
export default {
    
  components: { NavBar,    QuestionVue,TopPlaceCardVue,DescriptionVue,FooterVue
 },

  
 
}
</script>

<style  scoped>


</style>