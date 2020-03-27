<template>
    <div class="user-display" v-if="getUserdata != null">
        <h2>Logged in as...</h2>
        <span>{{ getUserdata.login }}</span>
        <Repos v-if="getUserrepos != null" v-bind:repos="getUserrepos"/>
    </div>
</template>

<script>

// import GithubService from '../services/GithubService'
import { mapGetters, mapActions } from 'vuex'

import Repos from './Repos'

export default {
    computed: {
        ...mapGetters(['getUserdata', 'getUserrepos'])
    },
    methods: {
        ...mapActions(['fetchUserdata', 'fetchUserrepos'])
    },
    components: {
        Repos
    },
    created: function() {
        console.log("User display created!")
        this.fetchUserdata()
        this.fetchUserrepos()
    }
}
</script>