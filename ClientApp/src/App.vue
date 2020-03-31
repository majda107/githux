<template>
  <div id="app" class="page-container app">
    <div class="topbar">
      <h1 class="topbar-title">Githux</h1>
      <div class="topbar-login">
        <LoginBar />
      </div>
    </div>
    <!-- <md-app> -->
    <!-- <md-app-toolbar class="md-primary md-dense"> -->
    <!-- <div class="md-toolbar-row">
          <h3 class="title" style="flex: 1">Githux</h3>
          <LoginBar />
    </div>-->
    <!-- </md-app-toolbar> -->
    <!-- </md-app> -->
    <NavigationBar v-bind:loggedIn="loggedIn" />
    <!-- <md-content> -->
    <div class="router-view">
      <router-view></router-view>
    </div>
    <!-- </md-content> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavigationBar from "./components/bars/NavigationBar.vue";

import LoginBar from "./components/bars/LoginBar";
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


<style lang="sass" scoped>
@import '../sass/abstracts/variables'

.topbar
  background-color: $primary
  width: 100%
  height: auto
  display: grid
  grid-auto-flow: column
  grid-template-columns: 20px auto 1fr auto 20px
  grid-template-areas: '. title . login .'
  justify-content: center
  align-items: center
  padding-top: 10px
  // padding-left: 20px
  // padding-right: 20px
  // padding: 20px

  &-title
    grid-area: title
    font-size: 2rem
    font-weight: 100

  &-login
    grid-area: login

.app
  background-color: $background-color
  min-height: 100vh

.router-view
  width: 94%
  margin-left: auto
  margin-right: auto
</style>



<style lang="sass">
@import '../sass/abstracts/variables'
@import '../sass/abstracts/mixins'

*
  color: $text-color
  font-family: 'Roboto'
  padding: 0
  margin: 0

body
  overflow-y: scroll

button
  background-color: $color
  color: $text-softer-dark-color
  font-size: 1.05rem
  font-weight: 500
  padding: 6px 14px 6px 14px
  border: 0
  border-radius: 2px
  @include elevation()

button:hover
  cursor: pointer
  @include elevation-hover()

input
  border: 0
  background: transparent
  padding: 6px 14px 6px 14px
  font-size: 1.2rem
  border-bottom: 2px solid $primary

input:focus
  outline: 0

label
  font-size: 1.2rem

a
  color: $accent


.header
  text-align: center
  padding-top: 40px
  padding-bottom: 40px

  &-sub
    font-size: 1.2rem
    color: $text-softer-dark-color

  &-title
    font-size: 1.6rem
    padding-bottom: 10px

</style>