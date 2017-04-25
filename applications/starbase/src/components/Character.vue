<template lang="html">
  <div class="">
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
    }
  },
  created() {
    this.fetchCharacter(this.id)
  }
}
</script>

<style lang="css">
</style>
