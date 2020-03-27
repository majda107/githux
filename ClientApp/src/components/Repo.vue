<template>
  <!-- <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25 repo">
    <md-card md-with-hover v-on:click.native="redirect" class="repo-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ repo.name}}</div>
          <div class="md-subhead">{{ repo.owner.login }} | {{ repo.language }}</div>
        </md-card-header-text>
        <md-button class="md-icon-button" md-menu-trigger>
          <md-avatar class="md-small">
            <img v-bind:src="repo.owner.avatar_url" alt="Avatar" />
          </md-avatar>
        </md-button>
      </md-card-header>

      <md-card-content>
        <div class="md-subhead">{{ repo.default_branch }}</div>
        <span class="md-caption">{{ repo.description }}</span>
      </md-card-content>

      <md-card-actions>
      </md-card-actions>
    </md-card>
  </div>-->
  <div class="container" v-on:click="redirect">
    <div class="repo">
      <div class="repo-header">
        <h3 class="repo-header-title">{{ repo.name }}</h3>
        <img class="repo-header-avatar" v-bind:src="repo.owner.avatar_url" />

        <span class="repo-header-language">{{ repo.language }}</span>
        <h4 class="repo-header-owner">{{ repo.owner.login }}</h4>
      </div>
      <div class="repo-content">
        <p class="repo-content-description">{{ repo.description }}</p>
      </div>
    </div>
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
      if (this.repo == null) return;
      this.$router.push({
        path: `/repositories/${this.repo.owner.login}/${this.repo.name}`
      });
    }
  }
};
</script>

// <style lang="sass" scoped>
// .repo
//   padding: 10px 0 10px 0
//     // height: 100% !important
//   &-card
//     height: 100% !important
// </style>


<style lang="sass" scoped>
@import '../../sass/abstracts/variables'

.container:hover
  box-shadow: 0 6px 14px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
  cursor: pointer
  
.container
  width: 100%
  height: 100%
  background-color: $background-darker-color
  border-radius: 6px
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  transition: all 0.3s cubic-bezier(.25,.8,.25,1)

.repo
  padding: 20px
  display: grid
  grid-auto-flow: row
  row-gap: 46px

  &-header
    display: grid
    grid-auto-flow: column
    row-gap: 14px
    grid-template-areas: 'title avatar' 'language owner'
    grid-template-columns: 1fr auto

    &-title
      grid-area: title

    &-avatar
      grid-area: avatar
      height: 40px
      width: 40px
      border-radius: 20px
      justify-self: flex-end

    &-language
      grid-area: language

    &-owner
      grid-area: owner
      justify-self: flex-end
      font-size: 0.9rem
      font-weight: 300

  &-content
    p
      color: $text-opaque-color
      max-height: 40px
      overflow: hidden
      text-overflow: ellipsis
</style>