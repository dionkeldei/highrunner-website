<template>
  <div id="app">
    <industry/>
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
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app.scss';
</style>
