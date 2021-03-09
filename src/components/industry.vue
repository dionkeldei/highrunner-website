<template lang="html">
  <div class="uk-width-1-1 background-industry" :style="backgroundImage()">

  </div>
</template>

<script>
export default {
  name: 'industry',
  props: {
    industry: Object
  },
  methods: {
    backgroundImage: function () {
      return 'background-image: url("'+this.industry.image+'");'
    }
  }
}
</script>

<style lang="css" scoped>
.background-industry{
  height: 500px; /* You must set a specified height */
  background-position: left; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>
