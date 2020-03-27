<template>
  <md-avatar>
    <img v-bind:src="url" alt="Avatar" />
  </md-avatar>
</template>

<script>
export default {
  props: ["url"]
};
</script>