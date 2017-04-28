<template>
  <div>
    <div class="form-inline">
      <h3>Sign In</h3>
      <div class="form-group">
        <input
          type="email"
          placeholder="email"
          class="form-control"
          v-model="email"
        />
        <input
          type="password"
          placeholder="password"
          class="form-control"
          v-model="password"
        />
        <button class="btn btn-primary" @click="signIn">Sign In</button>
      </div>
      <br>
      <p>{{error.message}}</p>
      <br>
    </div>
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
