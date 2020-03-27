<template>
  <!-- <form class="search-bar">
        <input type="text" class="search-bar-input" v-model="text">
        <button v-on:click="search">Search</button>
  </form>-->
  <!-- <ul class="repos">
        <Repo v-for="repo in repos" v-bind:repo="repo" :key="repo.id"/>
  </ul>-->
  <div>
    <md-field>
      <label>Search</label>
      <md-input v-model="initial"></md-input>
    </md-field>
    <md-button class="md-primary md-raised" v-on:click="search">Search</md-button>
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