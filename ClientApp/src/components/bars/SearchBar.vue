<template>
  <!-- <div>
    <md-field>
      <label>Search</label>
      <md-input v-model="initial"></md-input>
    </md-field>
    <md-button class="md-primary md-raised" v-on:click="search">Search</md-button>
  </div>-->
  <div class="container">
    <div class="search">
      <form class="search-form">
        <label class="search-form-label">Search: </label>
        <input class="search-form-input" v-model="initial" />
        <button class="search-form-button" v-on:click="search">Search</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      initial: ""
    };
  },
  methods: {
    search() {
      this.$emit("searched", this.initial);
    }
  }
};
</script>

<style lang="sass" scoped>

.container
  width: 100%
  display: flex
  justify-content: center
  justify-items: center

.search
  padding: 10px
  display: inline-block
  justify-self: center

  &-form
    width: auto
    display: inline-block

    &-input
      margin: 20px

</style>