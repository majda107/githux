<template>
  <div class="gists">
    <div class="header">
      <h2 class="header-title">My gists</h2>
      <span class="header-sub">... so I'm basically stealing your data ...</span>
    </div>
    <LoadingBar v-bind:active="loading" />
    <div class="gists-view" v-if="getUsergists != null">
      <!-- <div v-for="gist in getUsergists" :key="gist.id">{{ gist.url }}</div> -->
      <GistDetail v-for="gist in getUsergists" :key="gist.id" v-bind:gist="gist"/>
    </div>
    <div class="header">
      <h2 class="header-title">Gist creator</h2>
      <span class="header-sub">... lemme create gist for ya uwu...</span>
    </div>
    <div class="gists-creator">
      <GistCreator />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import LoadingBar from "../components/bars/LoadingBar";
import GistCreator from "../components/GistCreator";
import GistDetail from '../components/details/GistDetail'

export default {
  data: function() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapGetters(["getUsergists"])
  },
  methods: {
    ...mapActions(["fetchUsergists"])
  },
  components: {
    LoadingBar,
    GistCreator,
    GistDetail
  },
  created: function() {
    console.log("User display created!");
    this.loading = true;
    this.fetchUsergists().then(() => {
      this.loading = false;
    });
  }
};
</script>

<style lang="sass" scoped>
.gists

  &-view
    display: grid
    grid-template-columns: 100%
    row-gap: 16px

</style>