<template>
  <div class="home">
    <div class="header">
      <h2 class="header-title">Me</h2>
      <span class="header-sub">... yup, this is you ...</span>
    </div>
    <UserDisplay />
  </div>
</template>

<script>
import UserDisplay from "../components/UserDisplay";

export default {
  components: {
    UserDisplay
  }
};
</script>