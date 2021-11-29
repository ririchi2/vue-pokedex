<template>
  <div class="container">
    <h1>{{ this.name }}</h1>
    <img :src="url" alt="pokemon" />
  </div>
</template>

<script>
const FETCH_URL = `https://pokeapi.co/api/v2/pokemon/`;

export default {
  name: 'pokedex',
  mounted() {
    this.getPokemonData();
  },
  watch: {
    $route(to) {
      this.id = Number(to.params.id);
      this.activebg = Number(to.params.id);
      this.getPokemonData();
    }
  },
  data() {
    return {
      url: "",
      name: "",
      id: 1,
      bgs: {
        1: "../assets/backgroundBulb.jpg",
        4: "../assets/backgroundChar.jpg",
        7: "../assets/backgroundSquirtle.jpg",
      },
      activebg: "",
    };
  },
  methods: {
    getPokemonData() {
      fetch(FETCH_URL + `${this.id}`)
        .then((Response) => Response.json())
        .then((data) => {
          this.url = data.sprites.front_default;
          this.name = data.name;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: url(../assets/pokedex.png);
  background-size: 250px 110px;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
