<template lang="html">
  <BeerList :beers="beers"/>
</template>

<script>
import BeerList from '@/components/BeerList';


export default {
  components: { BeerList },
  data() {
    return {
      beers: []
    };
  },
  mounted(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(beers => this.beers = beers);
  },

}
</script>

<style lang="css" scoped>
</style>
