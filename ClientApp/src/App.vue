<template>
  <div id="app">
    <LoginBar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-if="loggedIn">
      <SearchBar v-on:searched="searched"/>
      <UserDisplay/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LoginBar from './components/LoginBar.vue'
import SearchBar from './components/SearchBar.vue'
import UserDisplay from './components/UserDisplay.vue'

import { State } from './services/State'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    LoginBar,
    UserDisplay,
    SearchBar
  },
  data: function() {
    return {
      loggedIn: false
    }
  },
  methods: {
    searched(text) {
      alert(text)
    }
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
