<template>
  <div class="repoview">
    <h2 class="repoview-title">... Detail of this mighty repo ...</h2>
    <LoadingBar v-bind:active="loadingData"/>
    <div class="repoview-detail">
      <RepoDetail v-bind:repo="repoData" />
    </div>
    <h2 class="repoview-title">... mighty commits ...</h2>
    <LoadingBar v-bind:active="loadingCommits"/>
    <div class="commits-detail">
      <CommitsDetail v-bind:commits="repoCommits" />
    </div>
  </div>
</template>

<script>
import RepoDetail from "../components/details/RepoDetail.vue";
import CommitsDetail from "../components/details/CommitsDetail.vue";

import LoadingBar from '../components/bars/LoadingBar'

import GithubService from "../services/GithubService";

export default {
  data: function() {
    return {
      repoData: null,
      repoCommits: null,

      loadingData: false,
      loadingCommits: false
    };
  },
  components: {
    RepoDetail,
    CommitsDetail,
    LoadingBar
  },
  methods: {
    getData() {
      let owner = this.$route.params.owner;
      let repo = this.$route.params.repo;

      GithubService.getOwnerRepo(owner, repo).then(data => {
        this.repoData = data;
        this.loadingData = false
        // console.log(this.repoData);
      });

      GithubService.getOwnerRepoCommits(owner, repo).then(data => {
        this.repoCommits = data;
        console.log(data);
        this.loadingCommits = false
      });
    }
  },
  created: function() {
    this.loadingData = true
    this.loadingCommits = true

    this.getData();
  }
};
</script>


<style lang="sass" scoped>
@import '../../sass/abstracts/variables'

.repoview
  display: grid
  grid-template-columns: 100%

  &-title
    padding-top: 30px
    padding-bottom: 30px
    font-weight: 300
    color: $text-opaque-color
    text-align: center
    
    &-detail
      justify-self: center
      width: 100%
</style>