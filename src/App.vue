<template>
  <div id="app">
    <div id="nav">
      <router-link to="/pokemon/1">Pokemon Feo</router-link> |
      <router-link to="/pokemon/4">Pokemon Bueno</router-link> |
      <router-link to="/pokemon/7">Pokemon Guapo</router-link>
    </div>
    <router-view/>

    <Pokedex></Pokedex>
    
  </div>
</template>

<script>
import pokedex from './components/pokedex.vue';

export default {
  name: 'App',
  components: {
    pokedex,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
