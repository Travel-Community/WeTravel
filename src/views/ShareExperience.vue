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
      <div class="status">
        <Status/>
      </div>
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
import Post from '../components/ShareExperience/Post'
import NavBar from '../components/ShareExperience/NavBar'
import Status from '../components/ShareExperience/Status'
export default {
components:{
    Post,NavBar,Status
}
}
</script>

<style scoped>

/* Demo styles - can be discarded. */
/* .w-app, header, footer, aside, main {
  margin: 4px;
  padding: 12px;
  text-transform: uppercase;
  color: #666;
  border: 1px solid rgba(0, 0, 0, 0.07);
} */
/* .w-app {background-color: #fffeed;}
header, footer {background-color: #e9f8fe;min-height: 60px;}
aside {background-color: #fef2ff;}
main {background-color: #efffed;} */
img{
  width: 365px;
  height: 275px;
  border-radius: 10px;
}
.status{
  display: flex;
    justify-content: center;
    margin-bottom: 70px;
}
.grow{
    margin-top:40px ;
    margin-left: 100px;

}
.aside{
    margin-left: 10px;
    margin-top:35px ;
}
h2{
  text-decoration: underline;
}
</style>