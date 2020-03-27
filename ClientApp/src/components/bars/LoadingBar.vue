<template>
  <div>
    <transition name="fade">
      <div v-if="active">
          <!-- <md-progress-bar class="md-accent" md-mode="query"></md-progress-bar> -->
          Loading...
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: [
      'active'
  ]
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>