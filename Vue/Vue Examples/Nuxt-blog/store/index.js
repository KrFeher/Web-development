import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    strict: true,
    state: {
      loadedPosts: []
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    },
    mutations: {
      setPosts(state, payload) {
        state.loadedPosts = payload;
      }
    },
    actions: {
      setPosts(vuexContext, payload) {
        vuexContext.commit('setPosts', payload);
      },
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-72afc.firebaseio.com/posts.json')
        .then(result => {
            const postArray = [];
            for (const key in result.data) {
                postArray.push({...result.data[key], id: key})
            }
            vuexContext.commit('setPosts', postArray);
        })
        .catch(error => context.error(error));
      }
    }
  })
};

export default createStore;
