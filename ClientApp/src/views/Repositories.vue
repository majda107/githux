<template>
  <div class="repositories">
    <div class="header">
      <h2 class="header-title">Public repositories</h2>
      <span class="header-sub">... alright then, keep your secrets ...</span>
    </div>
    <SearchBar v-on:searched="searched" />
    <LoadingBar v-bind:active="loading" />
    <Repos v-bind:repos="repos" />
  </div>
</template>

<script>
import SearchBar from "../components/bars/SearchBar";
import LoadingBar from "../components/bars/LoadingBar";
import Repos from "../components/Repos";

import GithubService from "../services/GithubService";

export default {
  name: "Repositories",
  data: function() {
    return {
      repos: null,
      loading: false
    };
  },
  components: {
    SearchBar,
    LoadingBar,
    Repos
  },
  methods: {
    searched: function(text) {
      this.$router.push({ path: `/repositories/${text}` }).catch(() => {});
    },

    query: function(query) {
      this.loading = true;
      GithubService.searchRepos(query).then(data => {
        this.repos = data.items;
        this.loading = false;
      });
    }
  },
  created: function() {
    let query = this.$route.params.query;
    if (query == null) return;

    this.query(query);
  },
  watch: {
    $route(to, from) {
      console.log("Route changed!" + to + from);
      let query = this.$route.params.query;
      if (query == null) return;

      this.query(query)
    }
  }
};
</script>