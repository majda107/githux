<template>
    <div class="user-display" v-if="getUserdata != null">
        <LoadingBar v-bind:active="loading"/>
        <h2>Logged in as...</h2>
        <span>{{ getUserdata.login }}</span>
        <Repos v-if="getUserrepos != null" v-bind:repos="getUserrepos"/>
    </div>
</template>

<script>

// import GithubService from '../services/GithubService'
import { mapGetters, mapActions } from 'vuex'

import Repos from './Repos'
import LoadingBar from './bars/LoadingBar'

export default {
    data: function() {
        return {
            loading: false
        }
    },
    computed: {
        ...mapGetters(['getUserdata', 'getUserrepos'])
    },
    methods: {
        ...mapActions(['fetchUserdata', 'fetchUserrepos'])
    },
    components: {
        Repos,
        LoadingBar
    },
    created: function() {
        console.log("User display created!")
        this.loading = true
        this.fetchUserdata()
        this.fetchUserrepos().then(() => {
            this.loading = false
        })
    }
}
</script>