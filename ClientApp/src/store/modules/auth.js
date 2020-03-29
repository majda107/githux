// import axios from 'axios'
import AuthService from '../../services/AuthService'

const state = {
    auth: {
        code: null,
        token: null,
        loggedIn: false
    }
}

const getters = {
    getCode: (state) => state.auth.code,
    getToken: (state) => state.auth.token,
    getLoggedIn: (state) => state.auth.loggedIn
}

const actions = {
    fetchCode({ commit }) {
        // console.log("... Fetching code in auth module")

        if (window.location.search == "") {
            // console.log("There are no url params!")
            return null;
        }

        // console.log(`Found url params:  ${window.location.search}`);
        let params = new URLSearchParams(window.location.search);
        let code = params.get('code')
        console.log(`Found code:  ${code}`);

        commit('setCode', code)
    },

    fetchToken({ commit }) {
        return new Promise((resolve) => {
            let code = getters.getCode(state)
            if (code == null) {
                console.log('there is no code...')
                return
            }

            AuthService.getToken(code).then(
                token => {
                    commit('setToken', token)
                    resolve(token)
                },
                () => {
                    window.location.href =
                        "https://github.com/login/oauth/authorize?scope=gist&client_id=1e9353a52e2953a97cb0";
                })
        })
    }
}

const mutations = {
    setCode: (state, code) => { state.auth.code = code },
    setToken: (state, token) => {
        state.auth.token = token

        state.auth.loggedIn = (token != null)
        if (state.auth.loggedIn) console.log("[AuthModule mutation] Logged in successfully!")
    },
    // setLoggedIn: (state, loggedIn ) => { state.auth.loggedIn = loggedIn }
}

export default {
    state,
    getters,
    actions,
    mutations
}