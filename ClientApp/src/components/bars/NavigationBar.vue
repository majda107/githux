<template>
  <div class="navigation">
    <!-- <md-tabs class="md-primary" md-alignment="centered" my-sync-route>
        <md-tab id="tab-home" md-label="Home" to="/home" router-link>
        </md-tab>
        <md-tab id="tab-repositories" md-label="Repositories" to="/repositories" router-link>
        </md-tab>
        <md-tab id="tab-gists" md-label="Gists" to="/gists" router-link>
        </md-tab>

        <md-tab v-if="getLoggedIn" id="tab-me" md-label="Me" to="/me" router-link>
        </md-tab>
    </md-tabs>-->

    <div class="navigation-links">
      <router-link class="navigation-links-link" to="/home">Home</router-link>
      <router-link class="navigation-links-link" to="/repositories">Repositories</router-link>
      <router-link class="navigation-links-link" to="/gists" v-if="getLoggedIn">My gists</router-link>
      <router-link class="navigation-links-link" to="/me" v-if="getLoggedIn">Me</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navigation",
  computed: {
    ...mapGetters(["getLoggedIn"])
  }
};
</script>


<style lang="sass" scoped>
@import '../../../sass/abstracts/variables'

.navigation
  background-color: $primary
  width: 100%
  display: flex
  justify-content: center
  padding-bottom: 10px
  padding-top: 10px

  &-links
    padding: 10px
    display: flex
    flex-wrap: wrap
    justify-content: center

    &-link
      padding: 10px
      color: $text-color
      text-decoration: none

.my-link-active-class
  border-bottom: 2px solid $color
      
</style>