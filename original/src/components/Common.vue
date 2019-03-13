<template>
  <container fluid>
    <Breadcrumb/>
    <b-row>
        <b-col cols="12" md="6">
            <Carrousel/>
        </b-col>
        <b-col cols="12" md="6">
            <Carrousel/>
        </b-col>
    </b-row>
  </container fluid>
</template>

<script>
import Breadcrumb from './shared/Breadcrumb.vue'
import Carrousel from './shared/Carrousel.vue'

export default {
  name: 'Common',
  components: {
    Breadcrumb,
    Carrousel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
