<template lang="html">
  <div class="" @click="switchCharacter">
    {{character}}
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    default: 1,
    validator: value => value >= 1
  },
  data() {
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter(id) {
      fetch(`http://swapi.co/api/people/${id}`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => this.character = json)
    },
    switchCharacter() {
      let random_id = Math.floor(Math.random() * 83) + 1
      this.fetchCharacter(random_id)
    }
  },
  created() {
    this.fetchCharacter(this.id)
  }
}
</script>

<style lang="css">
</style>
