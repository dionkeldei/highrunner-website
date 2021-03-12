<template lang="html">
  <div style="background:#000;color:#fff;padding-top: 20px;width:100%;" uk-grid>
     <div v-for="(family,i) in families" class="uk-width-1-2 uk-width-1-6@m" :key="i">
       <a href="#" style="color:white;text-decoration-none;">
         <p class="uk-text-center"><img src="https://demo.high-runner.com/wp-content/uploads/2021/03/gloves.png" class="uk-width-1-1 image-icon"/></p>
         <p class="uk-text-center"><b>{{family.name}}</b></p>
       </a>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      families: []
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
    console.log(this.industries[this.num].families)
    if(this.industries[this.num].families !== undefined){
      this.families = this.industries[this.num].families
    }
  },
  watch: {
    industries: function (val) {
      this.families = val[this.num].families
    }
  }
}
</script>

<style lang="css" scoped>
.image-icon{
  border: solid 1px white;
  width:50%;
}
</style>
