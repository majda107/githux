<template>
  <div>
    <!-- Repo detail {{ $route.params.owner }} | {{ $route.params.repo }} -->
    <div v-if="repo != null">{{ repo.name }}</div>
  </div>
</template>

<script>
export default {
  name: "Repo-detail",
  props: ["repo"]
};
</script>