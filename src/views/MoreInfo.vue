<template lang="html">
  <div class="" v-if="beer">
    <Header v-bind:text="beer.name"/>
    <h2>{{beer.name}}</h2>

  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {Header},
  props: ['beer'],
  mounted(){
    console.log(this.beer);
  }
}
</script>

<style lang="css" scoped>
</style>
