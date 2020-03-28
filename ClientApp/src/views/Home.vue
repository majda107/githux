<template>
  <div class="home">
    <div class="home-header">
      <h2 class="home-header-title">Homepage</h2>
      <span class="home-header-vue">... one mighty Vue place ...</span>
    </div>
    <!-- <span class="md-body-1">Vue repositories</span> -->
    <!-- <LoginBar/> -->
    <!-- <Githux/> -->
    <LoadingBar v-bind:active="loading" />
    <Repos v-if="vueRepos != null" v-bind:repos="vueRepos" />
  </div>
</template>

<script>
// import Githux from '../components/Githux'
// import LoginBar from '../components/LoginBar'
import GithubService from "../services/GithubService";

import Repos from "../components/Repos";
import LoadingBar from "../components/bars/LoadingBar";

export default {
  data: function() {
    return {
      vueRepos: null,
      loading: false
    };
  },
  components: {
    Repos,
    LoadingBar
  },
  created: function() {
    this.loading = true;
    GithubService.searchRepos("vue").then(repos => {
      this.vueRepos = repos.items;
      this.loading = false;
    });
  }
};
</script>

<style lang="sass">
@import '../../sass/abstracts/variables'

.home
    &-header
        text-align: center
        padding-top: 40px
        padding-bottom: 40px

        &-vue
            font-size: 1.2rem
            color: $text-softer-dark-color

        &-title
            font-size: 1.6rem
            padding-bottom: 10px
</style>