import Vue from 'vue'

export const State = new Vue({
    data: {
        code: null,
        token: null,
    },
    methods: {
        setToken(token) {
            this.token = token
            if(this.token == null) return
    
            this.$emit('received-token', token)
        }
    }
})