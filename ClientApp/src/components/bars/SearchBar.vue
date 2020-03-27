<template>
  <!-- <div>
    <md-field>
      <label>Search</label>
      <md-input v-model="initial"></md-input>
    </md-field>
    <md-button class="md-primary md-raised" v-on:click="search">Search</md-button>
  </div>-->
  <div class="search">
    <form class="search-form">
      <label>Search</label>
      <input v-model="initial" />
      <button v-on:click="search">Search</button>
    </form>
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