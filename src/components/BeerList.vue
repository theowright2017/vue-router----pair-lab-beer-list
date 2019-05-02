<template lang="html">
  <div class="beer-list">
    <BeerListItem v-for="beer in beers"
    v-bind:beer="beer"/>
  </div>
</template>

<script>
import BeerListItem from '@/components/BeerListItem';

export default {
  props:['beers'],
  components: { BeerListItem }
}
</script>

<style lang="css" scoped>
</style>
