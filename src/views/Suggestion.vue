<template>
  <w-app id="app">
  <header><NavBar/></header>
  <w-flex grow>
    <aside class="aside">
        <h2>Timeline</h2>
        <br>
        <br>
        <h3>All</h3>
      <br>
        <h3>Newest</h3>
        <br>
        <h3>Popular</h3>
    </aside>
    <main class="grow">
             <w-app>
        <w-flex  wrap class="text-center img">
      
        <div  v-for="i in 10" :key="`a${i}`" class="xs12 md6 lg4 xl3 pa1">

          <div >
            <template v-if=" $waveui.breakpoint.sm"><Post/></template>
            <template v-else-if="$waveui.breakpoint.md"> <Post/></template>
            <template v-else-if="$waveui.breakpoint.lg"><Post/></template>
            <template v-else-if="$waveui.breakpoint.xs"><Post/></template>
            <template v-else-if="$waveui.breakpoint.xl"><Post/></template>
          </div>
          
    </div>
       
      </w-flex>
    </w-app>
    </main>
  </w-flex>
</w-app>
</template>

<script>
import Post from '../components/Suggestion/Post'
import NavBar from '../components/Suggestion/NavBar'
export default {
components:{
    Post,NavBar,
}
}
</script>

<style scoped>


img{
  width: 365px;
  height: 275px;
  border-radius: 10px;
}
.grow{
    margin-top:10px ;
    margin-left: 50px;

}
.aside{
    margin-top:35px ;
}
h2{
  text-decoration: underline;
}
</style>