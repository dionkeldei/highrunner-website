<template>
  <div id="app" v-cloak>
    <industry v-for="(industry,i) in industries" :key="i" :industry="industry" :number="i+1" style="margin-bottom: 40px;"/>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import industry from '@/components/industry.vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons)
export default {
  name: 'App',
  components: {
    industry
  },
  created(){
    AOS.init()
  },
  data () {
    return {
      industries:[{
        image: 'https://demo.high-runner.com/wp-content/uploads/2021/03/Industrial-Markets-MetalFab.jpg',
        name: 'METAL FABRICATION'
      },
      {
        image: 'https://demo.high-runner.com/wp-content/uploads/2021/03/industria-left.png',
        name: 'Segundo industria'
      }]

    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app.scss';
[v-cloak] { display: none; }
</style>
