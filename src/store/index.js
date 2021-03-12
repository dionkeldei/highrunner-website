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
          context.state.industries = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
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
