<template>
  <div id="app">
    <h3>{{title}}</h3>
    <button class="btn btn-primary" @click="fetchCharacter">Test Fetch Character</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Generate Your Team'
    }
  },
  methods: {
    fetchCharacter() {
      fetch('http://swapi.co/api/people/1', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => console.log(json))
    }
  }
}
</script>

<style>
</style>
