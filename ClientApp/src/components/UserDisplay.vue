<template>
  <div class="user-display" v-if="getUserdata != null">
    <LoadingBar v-bind:active="loading" />
    <div class="header">
      <h2 class="header-title">W.. wh.. who are you?</h2>
      <span class="header-sub">... ah, thats {{ getUserdata.login }}...</span>
    </div>
    <Repos v-if="getUserrepos != null" v-bind:repos="getUserrepos" />
  </div>
</template>

<script>
// import GithubService from '../services/GithubService'
import { mapGetters, mapActions } from "vuex";

import Repos from "./Repos";
import LoadingBar from "./bars/LoadingBar";

export default {
  data: function() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapGetters(["getUserdata", "getUserrepos"])
  },
  methods: {
    ...mapActions(["fetchUserdata", "fetchUserrepos"])
  },
  components: {
    Repos,
    LoadingBar
  },
  created: function() {
    console.log("User display created!");
    this.loading = true;
    this.fetchUserdata();
    this.fetchUserrepos().then(() => {
      this.loading = false;
    });
  }
};
</script>