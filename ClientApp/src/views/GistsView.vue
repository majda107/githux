<template>
  <div class="repositories">
    <SearchBar v-on:searched="searched" />
    <LoadingBar v-bind:active="loading" />
  </div>
</template>

<script>
import SearchBar from "../components/bars/SearchBar";
import LoadingBar from "../components/bars/LoadingBar";

import GithubService from "../services/GithubService";

export default {
  name: "Repositories",
  data: function() {
    return {
      gists: null,
      loading: false
    };
  },
  components: {
    SearchBar,
    LoadingBar
  },
  methods: {
    searched: function(text) {
      this.$router.push({ path: `/gists/${text}` }).catch(() => {});
    },

    query: function(query) {
      this.loading = true;
      GithubService.searchGists(query).then(data => {
        this.gists = data.items;
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