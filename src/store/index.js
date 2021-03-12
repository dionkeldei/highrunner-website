import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    industries: {},
    families: {},
    products: {}
  },
  mutations: {
    updateIndustry: function (state, data) {
      state.industries = data
    }
  },
  actions: {
    getIndustries: function (context, data = undefined) {
      var url = 'https://demo.high-runner.com/wp-json/wp/v2/industries'
      if(data !== undefined){
        url += '/'+data
      }
      axios.get(url)
        .then(function (response) {
          // handle success
          context.commit('updateIndustry', response.data)
          context.dispatch('getIndustriesFamilies')
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },
    getFamilies: function (context, data = undefined) {
      var url = 'https://demo.high-runner.com/wp-json/wp/v2/families'
      if(data !== undefined){
        url += '/'+data
      }
      axios.get(url)
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },
    getIndustriesFamilies: function (context) {
      var industries = context.state.industries
      for(var i in industries){
        var url = 'https://demo.high-runner.com/wp-json/wp/v2/families?industries='+industries[i].id
        axios.get(url)
          .then(function (response) {
            industries[i]['families'] = response.data
            console.log(industries[i])
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      }

      context.commit('updateIndustry', industries)
    },
    getProducts: function (context, data = undefined) {
      var url = 'https://demo.high-runner.com/wp-json/wp/v2/products'
      if(data !== undefined){
        url += '/'+data
      }
      axios.get(url)
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  },
  modules: {
  }
})
