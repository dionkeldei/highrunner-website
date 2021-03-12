import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ready: false,
    industries: {},
    key: 0
  },
  mutations: {
    updateIndustries: function (state, data) {
      state.industries = data
    },
    updateIndustry: function (state, data) {
      state.industries[data.key]['families'] = data.data
      state.key += 1
    },
    ready: function (state) {
      state.ready = true
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
          context.commit('updateIndustries', response.data)
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
      var length = context.state.industries.length
      var industries = context.state.industries
      var i = context.state.key
      var obj = {}
      if(i < length){
        var url = 'https://demo.high-runner.com/wp-json/wp/v2/families?industries='+industries[i].id
        axios.get(url)
          .then(function (response) {
            obj = {
              'key': i,
              'data': response.data
            }
            context.commit('updateIndustry', obj)
            context.dispatch('getIndustriesFamilies')
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      }else{
        context.commit('ready')
      }

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
