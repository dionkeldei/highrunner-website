<template lang="html">
  <div class="uk-width-1-1 uk-flex uk-flex-middle industry-div" style="height:100%" uk-grid>
    <div class="uk-width-2-3" style="height:100%">
      <img :src="industry.image" style="max-height:100%"/>
    </div>
    <div class="uk-width-1-3">
      <p class="uk-text-center title-industry">{{industry.name}}</p>
      <p class="uk-text-center">Ver productos</p>
      <p class="uk-text-center"><span uk-icon="icon: chevron-down"></span></p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'industry',
  props: {
    industry: Object
  },
  methods: {
  }
}
</script>

<style lang="css" scoped>
h3,p{
  line-height:11px !important;
}
.industry-div{
  cursor: pointer;
}
.industry-div:hover{
  color: red !important;
}
.title-industry{
  font-size: 1.5rem;
}
</style>
