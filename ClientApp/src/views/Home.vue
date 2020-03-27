<template>
    <div class="home">
        <span class="md-display-1">Homepage</span>
        <br>
        <!-- <span class="md-body-1">Vue repositories</span> -->
        <!-- <LoginBar/> -->
        <!-- <Githux/> -->
        <LoadingBar v-bind:active="loading"/>
        <Repos v-if="vueRepos != null" v-bind:repos="vueRepos"/>
    </div>
</template>

<script>
// import Githux from '../components/Githux'
// import LoginBar from '../components/LoginBar'
import GithubService from '../services/GithubService'

import Repos from '../components/Repos'
import LoadingBar from '../components/bars/LoadingBar'

export default {
    data: function() {
        return {
            vueRepos: null,
            loading: false
        }
    },
    components: {
        Repos,
        LoadingBar
    },
    created: function() {
        this.loading = true
        GithubService.searchRepos("vue").then(repos => {
            this.vueRepos = repos.items
            this.loading = false
        })
    }
}
</script>