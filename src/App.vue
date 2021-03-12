<template>
  <div v-if="ready" id="app" v-cloak>
    <industry v-for="(industry,i) in industries" :key="i" :industry="industry" :number="i+1" style="margin-bottom: 40px;"/>
  </div>
</template>

<script>
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
import industry from '@/components/industry.vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons)
export default {
  store,
  name: 'App',
  components: {
    industry
  },
  created(){
    AOS.init()
  },
  computed: {
    industries: function () {
      return this.$store.state.industries
    },
    ready: function () {
      return this.$store.state.ready
    }
  },
  mounted () {
    this.$store.dispatch('getIndustries')
  }
}
</script>

<style lang="scss">
//@import 'assets/scss/app.scss';
[v-cloak] { display: none; }
</style>
