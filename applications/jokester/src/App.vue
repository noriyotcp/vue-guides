<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h3>Got jokes?</h3>
    <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
    <br>
    <br>
    <div class="col-md-12">
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        :joke="joke"
        key="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
  name: 'app',
  methods: mapActions([
    'initJokes'
  ]),
  components: {
    Joke
  }
}
</script>

<style>
</style>
