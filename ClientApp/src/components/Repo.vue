<template>
  <div class="md-layout-item md-medium-size-50 md-size-25 repo">
    <!-- <h2>{{ repo.name }}</h2>
    <span class="repo-branch">{{ repo.default_branch }}</span>
    <span class="repo-language">{{ repo.language }}</span>
    <a :href="repo.html_url">Link</a>
    <p>{{ repo.description }}</p>-->
    <md-card md-with-hover :href="repo.html_url" class="repo-card">
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ repo.name}}</div>
          <div class="md-subhead">{{ repo.default_branch }}</div>
          <div class="md-subhead">{{ repo.language }}</div>
        </md-card-header>

        <md-card-content>{{ repo.description }}</md-card-content>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  props: ["repo"],
  created: function() {
    // console.log(repo.name)
  }
};
</script>

<style lang="sass" scoped>
.repo
    padding: 10px 0 10px 0
    // height: 100% !important
    &-card
        height: 100% !important
</style>