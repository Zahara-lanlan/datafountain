<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
body {
  background: #fafafa;
  margin: 0;
  padding: 0;
  /* background: url("./assets/img/R.jpeg");
  background-size: 100% auto; */
  
}
</style>
