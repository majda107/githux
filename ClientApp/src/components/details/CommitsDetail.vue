<template>
  <div v-if="commits != null" class="container">
    <div class="commits">
      <CommitDetail class="commits-commit" v-for="commit in commits" :key="commit.sha" v-bind:commit="commit" />
    </div>
  </div>
</template>

<script>
import CommitDetail from "./CommitDetail";

export default {
  name: "Commits-detail",
  props: ["commits"],
  components: {
    CommitDetail
  }
};
</script>

<style lang="sass" scoped>
.commits
  display: grid
  grid-auto-flow: row
  grid-template-columns: 100%
  row-gap: 10px

</style>