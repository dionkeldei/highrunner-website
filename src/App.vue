<template>
  <div id="app">
    <industry v-for="(industry,i) in industries" :key="i" :industry="industry"/>
  </div>
</template>

<script>
import industry from '@/components/industry.vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
UIkit.use(Icons)
export default {
  name: 'App',
  components: {
    industry
  },
  data () {
    return {
      industries:[{
        image: 'https://demo.high-runner.com/wp-content/uploads/2021/03/Industrial-Markets-MetalFab.jpg',
        name: 'METAL FABRICATION'
      }]

    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app.scss';
</style>
