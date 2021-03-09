<template lang="html">
  <div class="">
    <div v-if="isOdd(this.number)" @click="click()" class="uk-width-1-1 uk-flex uk-flex-middle industry-div" :style="backgroundColor" style="height:100%" data-aos="fade-right" uk-grid>
      <div class="uk-width-2-3" style="height:100%">
        <img :src="industry.image" style="max-height:100%"/>
      </div>
      <div class="uk-width-1-3">
        <p class="uk-text-center title-industry">{{industry.name}}</p>
        <p class="uk-text-center">Ver productos</p>
        <p class="uk-text-center"><span uk-icon="icon: chevron-down"></span></p>
      </div>
    </div>

    <div v-if="!isOdd(this.number)" @click="click()" class="uk-width-1-1 uk-flex uk-flex-middle industry-div" :style="backgroundColor" style="height:100%" data-aos="fade-left" uk-grid>
      <div class="uk-width-1-3">
        <p class="uk-text-center title-industry">{{industry.name}}</p>
        <p class="uk-text-center">Ver productos</p>
        <p class="uk-text-center"><span uk-icon="icon: chevron-down"></span></p>
      </div>
      <div class="uk-width-2-3" style="height:100%">
        <img :src="industry.image" style="max-height:100%"/>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'industry',
  data () {
    return {
      clicked: false
    }
  },
  props: {
    industry: Object,
    number: Number
  },
  methods: {
    isOdd: function (num){
      return num % 2
    },
    click(){
      if(this.clicked){
        console.log("segindo click")
        this.clicked = false
      }else{
        console.log("primer click")
        this.clicked = true
      }
    }
  },
  mounted(){
  },
  computed: {
    backgroundColor(){
      if(this.clicked){
        return 'background-color:#000;color:white;'
      }else{
        return 'background-color:#fff;color:black;'
      }
    }
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
