<template lang="html">
  <div style="background:#000;color:#fff;padding-top: 20px;width:100%;margin-left:0px;" uk-grid>
     <div v-for="(family,i) in families" class="uk-width-1-2 uk-width-1-6@m" :key="i">
       <a :href="makeLink(family.link)" style="color:white;text-decoration-none;">
         <p class="uk-text-center"><img :src="checkIcon(family)" class="uk-width-1-1 image-icon"/></p>
         <p class="uk-text-center"><b>{{family.name}}</b></p>
       </a>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      families: [],
      industriesSlug: ''
    }
  },
  props: {
    num: String
  },
  computed: {
    industries: function () {
      return this.$store.state.industries
    }
  },
  mounted () {
    if(this.industries[this.num].families !== undefined){
      this.families = this.industries[this.num].families
      this.industriesSlug = this.industries[this.num].slug
    }
  },
  watch: {
    industries: function (val) {
      this.families = val[this.num].families
    }
  },
  methods: {
    checkIcon: function (family) {
      if(family.acf.length != 0){
        return family.acf.icono.url
      }
      return ''
    },
    makeLink: function (link){
      return link+'?industry='+this.industriesSlug
    }
  }
}
</script>

<style lang="css" scoped>
.image-icon{
  width:50%;
}
</style>
