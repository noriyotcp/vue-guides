<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h3>Got jokes?</h3>
    <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
    {{$store.state}}
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app',
  methods: mapActions([
    'initJokes'
  ])
}
</script>

<style>
</style>
