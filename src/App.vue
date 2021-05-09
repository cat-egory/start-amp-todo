<template>
  <div id="root">
    <h3>here</h3>
    <div id="nav">
      <router-link to="/"> go Home</router-link>
      <router-link to="/about"> go About </router-link>
    </div>
    <router-view />
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
