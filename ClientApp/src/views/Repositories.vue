<template>
  <div class="repositories">
    Repos...
    <SearchBar v-on:searched="searched"/>
    <LoadingBar v-bind:active="loading"/>
    <Repos v-bind:repos="repos"/>
  </div>
</template>

<script>
import SearchBar from "../components/bars/SearchBar"
import LoadingBar from "../components/bars/LoadingBar"
import Repos from "../components/Repos"

import GithubService from "../services/GithubService"

export default {
  name: "Repositories",
  data: function() {
      return {
          repos: null,
          loading: false
      }
  },
  components: {
    SearchBar,
    LoadingBar,
    Repos
  },
  methods: {
      searched: function(text) {
          this.loading = true
          GithubService.searchRepos(text).then(data => {
              this.repos = data.items
              this.loading = false
          })
      }
  }
};
</script>