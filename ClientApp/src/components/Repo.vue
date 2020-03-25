<template>
    <div class="repo">
        <h2>{{ repo.name }}</h2>
        <span class="repo-branch">{{ repo.default_branch }}</span>
        <span class="repo-language">{{ repo.language }}</span>
        <a :href="repo.html_url">Link</a>
        <p>{{ repo.description }}</p>
    </div>
</template>

<script>
export default {
    props: [
        'repo'
    ],
    created: function() {
        // console.log(repo.name)
    }
}
</script>