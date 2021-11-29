<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <pokedex></pokedex>
  </div>
</template>

<script>
// @ is an alias to /src
import pokedex from '../components/pokedex.vue'

export default {
  name: 'Home',
  components: {
    pokedex
  }
}
</script>
