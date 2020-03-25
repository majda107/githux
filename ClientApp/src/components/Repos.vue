<template>
    <ul class="repos">
        <Repo v-for="repo in repos" v-bind:repo="repo" :key="repo.id"/>
    </ul>
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