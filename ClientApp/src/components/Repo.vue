<template>
  <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25 repo">
    <!-- <h2>{{ repo.name }}</h2>
    <span class="repo-branch">{{ repo.default_branch }}</span>
    <span class="repo-language">{{ repo.language }}</span>
    <a :href="repo.html_url">Link</a>
    <p>{{ repo.description }}</p>-->
    <md-card md-with-hover :href="repo.html_url" class="repo-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ repo.name}}</div>
          <div class="md-subhead">{{ repo.owner.login }} | {{ repo.language }}</div>
        </md-card-header-text>
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon v-on:click.native="redirect">home</md-icon>
        </md-button>
      </md-card-header>

      <md-card-content>
        <div class="md-subhead">{{ repo.default_branch }}</div>
        <span class="md-caption">{{ repo.description }}</span>
      </md-card-content>

      <md-card-actions>
        <!-- <span class="md-body-1">{{ repo.ssh_url }}</span> -->
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  props: ["repo"],
  created: function() {
    // console.log(repo.name)
  },
  methods: {
    redirect: function() {
      if(this.repo == null) return
      this.$router.push({ path: `/repositories/${this.repo.owner.login}/${this.repo.name}` })
    }
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