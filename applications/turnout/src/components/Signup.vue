<template>
  <div>
    <div class="form-inline">
      <h3>Sign Up</h3>
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
        <button class="btn btn-primary" @click="signUp">Sign Up</button>
      </div>
      <br>
      <p>{{error.message}}</p>
      <br>
      <router-link to="/signin">Already a user? Sign in</router-link>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
  name: 'signup',
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
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

<style>
</style>
