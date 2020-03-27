<template>
  <div v-if="repo != null" class="container">
    <div class="repo">
      <div class="repo-header">
        <h3>{{ repo.name }}</h3>
        <img v-bind:src="repo.owner.avatar_url" />

        <span>{{ repo.id }}</span>
      </div>
      <div class="repo-content">
        {{ repo.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Repo-detail",
  props: ["repo"]
};
</script>

<style lang="sass" scoped>
@import '../../../sass/abstracts/variables'
@import '../../../sass/abstracts/mixins'

.container
  width: 100%
  border-radius: 6px
  @include elevation()
  background-color: $background-darker-color

.repo
  padding: 14px
  display: grid
  grid-auto-flow: row
  grid-template-columns: 100%
  justify-items: center
  width: 100%

  &-header
    display: grid
    grid-template-areas: 'id id' 'header image'
    img
      width: 44px
      height: 44px
      margin-left: 20px

    h3
      font-size: 1.6rem
      align-self: center
    
    span
      grid-area: id
      justify-self: center
      font-weight: 600
      color: $text-softer-dark-color
      font-size: 1.5rem
      padding-bottom: 14px

  &-content
    max-height: 100px
    padding-top: 40px
    overflow: hidden

</style>