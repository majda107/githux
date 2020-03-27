<template>
  <!-- <div class="md-layout md-gutter md-alignment-top-center repos">
        <Repo v-for="repo in repos" v-bind:repo="repo" :key="repo.id"/>
  </div>-->
  <div class="repos">
    <div class="repos-repo" v-for="repo in repos" :key="repo.id">
      <Repo v-bind:repo="repo" />
    </div>
  </div>
</template>

<script>
import Repo from "./Repo";

export default {
  components: {
    Repo
  },
  props: ["repos"]
};
//
</script>
// <style lang="sass" scoped>
// .repos
//     align-items: stretch !important
//     // padding: 0 60px 0 60px
// </style>

<style lang="sass" scoped>
.repos
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: stretch

    &-repo
        padding: 14px
        // width: 46%
        width: 440px

@media screen and ( max-width:  800)
    .repos
        &-repo
            width: 90%
</style>