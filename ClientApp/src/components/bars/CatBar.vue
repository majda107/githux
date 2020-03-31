<template>
  <div class="cat-bar">
    <div v-if="cat != null">{{ cat.text }}</div>
    <div v-else>... fetching cat data ...</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: function() {
    return {
      cat: null
    };
  },
  methods: {
    ...mapActions(["fetchCats"])
  },
  created: function() {
    this.fetchCats();
    setInterval(() => {
      //   this.$forceUpdate();
      this.cat = this.getCats[Math.floor(Math.random() * this.getCats.length)];
      console.log("GETTING RANDOM CAT!");
    }, 10000);
  },
  computed: {
    ...mapGetters(["getCats"])
  }
};
</script>

<style lang="sass" scoped>
@import '../../../sass/abstracts/variables'

.cat-bar 
    text-align: center
    text-overflow: ellipsis
    overflow: hidden
    height: 40px
    width: 90%
    display: flex
    justify-content: center
    align-items: center

    div
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
        color: $text-softer-dark-color

</style>