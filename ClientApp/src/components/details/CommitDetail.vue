<template>
  <div v-if="commit != null" class="container">
    <div class="commit">
      <div class="commit-hash">{{ commit.sha }}</div>
      <div class="commit-date">{{ commit.commit.committer.date }}</div>
      <div class="commit-message">{{ commit.commit.message }}</div>
      <img class="commit-avatar" v-bind:src="commit.committer.avatar_url" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Commit-detail",
  props: ["commit"]
};
</script>

<style lang="sass" scoped>
@import '../../../sass/abstracts/variables'

.container
    background-color: $background-darker-color
    border-radius: 6px

.commit
    padding: 10px    
    display: flex
    display: grid
    grid-template-areas: 'date message avatar' 'hash message avatar'
    grid-template-columns: minmax(auto, 200px) 1fr 40px
    grid-grid-template-rows: auto auto
    column-gap: 30px
    row-gap: 10px
    align-items: center

    &-message
        grid-area: message
        width: 100%
        word-wrap: break-word

    &-avatar
        grid-area: avatar
        height: 40px
        width: 40px
        border-radius: 20px

    &-date
        grid-area: date
        font-size: 1.0rem
        font-weight: 700
        color: $primary

    &-hash
        grid-area: hash
        color: $text-opaque-color
        word-wrap: break-word
        overflow-wrap: break-word
        width: 100%

@media screen and ( max-width: 700px )
    .commit
        grid-template-areas: 'date' 'hash' 'message' 'avatar'
        grid-template-columns: 100%
        grid-grid-template-rows: auto auto 40px
        padding: 20px
        row-gap: 30px
        justify-content: center
        justify-items: center

        &-message
            text-align: center

        &-hash
            text-align: center
    
</style>