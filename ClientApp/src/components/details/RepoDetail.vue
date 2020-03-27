<template>
  <div v-if="repo != null" class="md-layout-item md-size-100 repo">
    <md-content class="md-layout">
      <div class="md-layout-item md-size-100">
        <div class="md-display-2">{{ repo.name }}</div>
        <div class="md-caption">{{ repo.id }}</div>
        <div class="md-subheading">{{ repo.full_name }}</div>
      </div>
      <md-divider></md-divider>
      <md-card md-with-hover class="repo-card md-layout-item md-size-100">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ repo.name}}</div>
            <div class="md-subhead">{{ repo.owner.login }} | {{ repo.language }}</div>
          </md-card-header-text>
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>home</md-icon>
          </md-button>
        </md-card-header>

        <md-card-content>
          <div class="md-subhead">{{ repo.default_branch }}</div>
          <span class="md-caption">{{ repo.description }}</span>
        </md-card-content>

        <md-card-actions>
          <!-- <span class="md-body-1">{{ repo.ssh_url }}</span> -->
        </md-card-actions>
      </md-card>
    </md-content>
  </div>
</template>

<script>
export default {
  name: "Repo-detail",
  props: ["repo"]
};
</script>