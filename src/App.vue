<template>
    <w-app>

  
  <router-view/>
    </w-app>

</template>

<style lang="scss" >


.text-wrapper {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #41B3A3;
    }
  }
}
</style>
