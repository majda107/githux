<template>
    <div class="md-layout md-gutter md-alignment-top-center repos">
        <Repo v-for="repo in repos" v-bind:repo="repo" :key="repo.id"/>
    </div>
</template>

<script>
import Repo from './Repo'

export default {
    components: {
        Repo
    },
    props: [
        'repos'
    ]
}
</script>
<style lang="sass" scoped>
.repos
    align-items: stretch !important
    padding: 0 60px 0 60px
</style>