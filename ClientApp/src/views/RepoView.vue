<template>
  <div class="repoview">
    <h2 class="repoview-title">... Detail of this mighty repo ...</h2>
    <div class="repoview-detail">
      <RepoDetail v-bind:repo="repoData" />
    </div>
  </div>
</template>

<script>
import RepoDetail from "../components/details/RepoDetail.vue";
import GithubService from "../services/GithubService";

export default {
  data: function() {
    return {
      repoData: null
    };
  },
  components: {
    RepoDetail
  },
  methods: {
    getData() {
      GithubService.getOwnerRepo(
        this.$route.params.owner,
        this.$route.params.repo
      ).then(data => {
        this.repoData = data;
        console.log(this.repoData);
      });
    }
  },
  created: function() {
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