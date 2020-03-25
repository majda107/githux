<template>
  <div id="app">
    <LoginBar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-if="loggedIn">
      <UserDisplay/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LoginBar from './components/LoginBar.vue'
import UserDisplay from './components/UserDisplay'

import { State } from './services/State'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    LoginBar,
    UserDisplay
  },
  data: function() {
    return {
      loggedIn: false
    }
  },
  methods: {
    
  },
  created: function() {
    State.$on('received-token', token => {
      console.log(`~ Token received in app! ${token}`)
      this.loggedIn = true
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
