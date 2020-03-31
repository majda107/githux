import axios from 'axios'

const state = {
    cats: null
}

const getters = {
    getCats: (state) => state.cats,
    getRandomCat: (state) => {
        console.log("TRIGGEEEEEEEEEErEED CAT GETTER")
        if(state.cats == null) return null
        return state.cats[Math.floor(Math.random()*state.cats.length)]
    }
}

const actions = {
    fetchCats({ commit }) {
        axios.get('https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts').then(reponse => {
            console.log("Cats fetched!")
            console.log(reponse.data)
            commit('setCats', reponse.data)
        })
    }
}

const mutations = {
    setCats: (state, data) => {
        state.cats = data.all
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}