<template>
  <div id="app" class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary md-dense">
        <div class="md-toolbar-row">
          <h3 class="md-title" style="flex: 1">Githux</h3>
          <!-- <md-icon>favorite</md-icon> -->
          <LoginBar/>
        </div>
      </md-app-toolbar>
    </md-app>
    <NavigationBar v-bind:loggedIn="loggedIn"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavigationBar from "./components/bars/NavigationBar.vue";

import LoginBar from './components/LoginBar.vue'
// import SearchBar from './components/SearchBar.vue'
// import UserDisplay from './components/UserDisplay.vue'

import { State } from "./services/State";

export default {
  name: "App",
  components: {
    // HelloWorld,
    LoginBar,
    // UserDisplay,
    // SearchBar,
    NavigationBar
  },
  data: function() {
    return {
      loggedIn: false
    };
  },
  methods: {
    searched(text) {
      alert(text);
    }
  },
  created: function() {
    State.$on("received-token", token => {
      console.log(`~ Token received in app! ${token}`);
      this.loggedIn = true;
    });
  }
};
</script>

