<template>
    <form class="search-bar">
        <input type="text" class="search-bar-input" v-model="text">
        <button v-on:click="search">Search</button>
    </form>
    <!-- <ul class="repos">
        <Repo v-for="repo in repos" v-bind:repo="repo" :key="repo.id"/>
    </ul> -->
</template>

<script>

export default {
    data: function() {
        return {
            text: ""
        }
    },
    methods: {
        search() {
            this.$emit('searched', this.text)
        }
    }
}
</script>