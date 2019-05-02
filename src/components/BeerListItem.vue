<template lang="html">
  <div class="">
    <router-link :to="{name: 'moreInfo', params: {beer}}">{{beer.name}}</router-link>
  </div>
</template>

<script>
export default {
  props: ['beer']
}
</script>

<style lang="css" scoped>
</style>
