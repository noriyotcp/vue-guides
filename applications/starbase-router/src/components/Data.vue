<template lang="html">
  <div class="col-md-12">
    <Item
     v-for="(item, index) in items"
     key="index"
     :item="item"
     />
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  data() {
    return {
      type: this.$route.params.type,
      items: []
    }
  },
  watch: {
    '$route': 'fetchItems'
  },
  methods: {
    fetchItems() {
      this.items = []
      this.type = this.$route.params.type
      let initial_ids = [1, 13, 14]

      for (let index in initial_ids) {
        let id = initial_ids[index]
        console.log('id', id)
        fetch(`http://swapi.co/api/${this.type}/${id}`, { method: 'GET' })
          .then(response => response.json())
          .then(json => this.items.push(json))
      }
    }
  },
  created() {
    this.fetchItems()
  },
  components: {
    Item
  }
}
</script>

<style lang="css">
</style>
