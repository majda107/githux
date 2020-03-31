<template>
  <div class="container">
    <LoadingBar v-bind:active="loading" />
    <div class="creator" v-if="!loading">
      <form class="creator-form">
        <label class="creator-form-label">Description</label>
        <input v-model="gistDescription" type="text" class="creator-form-input" />

        <label class="creator-form-label">Public</label>
        <input v-model="gistPublic" type="checkbox" class="creator-form-input" />

        <div class="creator-form-file" v-for="file in gistFiles" :key="file.name">
          <div class="creator-form-file-line">
            <label class="creator-form-label">File</label>
            <span class="creator-form-file-line-remove" v-on:click="removeFile(file)">Remove</span>
          </div>
          <input v-model="file.name" class="creator-form-input" placeholder="file.txt"/>

          <input v-model="file.content" class="creator-form-input" placeholder="content..."/>
        </div>
        <button v-on:click="newFile" type="button">New file</button>

        <button v-on:click="createTestGist">Create gist</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import LoadingBar from "../components/bars/LoadingBar";

export default {
  data: function() {
    return {
      loading: false,

      gistDescription: "",
      gistPublic: true,

      gistFiles: []
    };
  },
  methods: {
    ...mapActions(["createUsergist"]),
    newFile() {
      this.gistFiles.push({ name: "", content: "" });
    },

    removeFile(file) {
        let index = this.gistFiles.indexOf(file)
        if(index < 0) return
        this.gistFiles.splice(index, 1)
    },
    createTestGist() {
      this.loading = true;

      let gistFiles = {};
      for (let gistFile of this.gistFiles) {
        gistFiles[gistFile.name] = { content: gistFile.content };
      }

      this.createUsergist({
        description: this.gistDescription,
        public: this.gistPublic,
        files: gistFiles
      }).then(
        () => {
          this.loading = false;
        },
        () => {
          alert("Bad input data!");
          this.loading = false;
        }
      );
    }
  },
  components: {
    LoadingBar
  }
};
</script>

<style lang="sass" scoped>
@import '../../sass/abstracts/variables'
@import '../../sass/abstracts/mixins'

.creator
    // background-color: $background-darker-color
    border-radius: 6px
    
    &-form
        display: grid
        grid-template-columns: 1fr 1fr
        row-gap: 24px
        column-gap: 40px
        padding: 20px
        align-items: center

        &-file
            display: grid
            row-gap: 16px
            // background-color: $background-color
            background-color: $background-darker-color
            transition: background-color 1s
            border-radius: 4px
            padding: 20px
            grid-template-columns: 100%
            @include elevation()

            &-line
                display: grid
                grid-auto-flow: column
                grid-template-columns: auto 1fr
                align-items: center

                &-remove
                    justify-self: flex-end
                    color: $accent
                    font-size: 1.1rem
                    font-weight: 700
                    border-bottom: 2px solid $accent

                &-remove:hover
                    cursor: pointer

@media screen and ( max-width: 800px )
  .creator
    &-form
      grid-template-columns: 100%
  
</style>

