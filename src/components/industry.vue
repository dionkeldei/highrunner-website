<template lang="html">
<div>
    <div v-if="isOdd(this.number)" @click="click()" class="uk-width-1-1 uk-flex uk-flex-middle industry-div" :style="backgroundColor" style="height:100%;margin-left:0px;" data-aos="fade-right" uk-grid>
      <div class="uk-width-2-3" style="height:100%;padding-left:0px;">
        <img :src="industry.acf['fondo-desktop'].url" :class="grayClass" style="max-height:100%"/>
      </div>
      <div class="uk-width-1-3">
        <p class="uk-text-center title-industry">{{industry.name}}</p>
        <p class="uk-text-center">Ver productos</p>
        <p class="uk-text-center"><b><span :uk-icon="icon"></span></b></p>
      </div>
      <dropdown :style="displayDropdown" :industry="industry" :num="this.id"/>
    </div>

    <div v-if="!isOdd(this.number)" @click="click()" class="uk-width-1-1 uk-flex uk-flex-middle industry-div" :style="backgroundColor" style="height:100%;margin-left:0px;" data-aos="fade-left" uk-grid>
      <div class="uk-width-1-3">
        <p class="uk-text-center title-industry">{{industry.name}}</p>
        <p class="uk-text-center">Ver productos</p>
        <p class="uk-text-center"><b><span :uk-icon="icon"></span></b></p>
      </div>
      <div class="uk-width-2-3" style="height:100%;padding-left:0px;">
        <img :src="industry.acf['fondo-desktop'].url" :class="grayClass" style="max-height:100%"/>
      </div>
      <dropdown :style="displayDropdown" :industry="industry" :num="this.id"/>
    </div>


</div>
</template>

<script>
import dropdown from '@/components/dropdown.vue'
export default {
  name: 'industry',
  data () {
    return {
      clicked: false,
      id: '0'
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
        this.clicked = false
      }else{
        this.clicked = true
      }
    }
  },
  mounted(){
    this.id = 'dropdown-industry-'+this.number
  },
  computed: {
    backgroundColor(){
      if(this.clicked){
        return 'background-color:#000;color:white;'
      }else{
        return 'background-color:#fff;color:black;'
      }
    },
    icon(){
      if(this.clicked){
        return 'icon: chevron-up'
      }else{
        return 'icon: chevron-down'
      }
    },
    grayClass: function () {
      if(this.clicked){
        return 'gray-image'
      }
      return ''
    },
    displayDropdown: function () {
      if(!this.clicked){
        return 'display:none'
      }else{
        return ''
      }
    }
  },
  components:{
    dropdown
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
.gray-image{
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
</style>
