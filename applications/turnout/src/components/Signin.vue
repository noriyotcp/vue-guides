<template>
  <div>
    <h1>Signin Component</h1>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
  name: 'signin',
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

<style>
</style>
