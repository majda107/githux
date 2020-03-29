<template>
  <div v-if="gist != null" class="container">
    <div class="gist">
      <div class="gist-header">
        <h3 class="gist-header-url">{{ gist.url }}</h3>
      </div>
      <div class="gist-files">
          <div class="gist-files-file" v-for="file in files" :key="file.name"> 
              {{ file.name }} - <a v-bind:href="file.url" target="_blank">Raw content</a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Gist-detail",
  props: ["gist"],
  computed: {
      files: function() {
          let files = []
          for(let file in this.gist.files) {
              files.push({ name: file, language: this.gist.files[file].language, url: this.gist.files[file].raw_url })
          }
          return files
      }
  },
  created: function() {
      console.log(this.gist)
  }
};
</script>


<style lang="sass" scoped>
@import '../../../sass/abstracts/variables'
@import '../../../sass/abstracts/mixins'

.container
    background-color: $background-darker-color
    @include elevation()
    border-radius: 6px

.gist
    padding: 10px
    display: grid
    row-gap: 12px
    
    &-header
        &-url
            color: $text-opaque-color
            word-break: break-word
</style>