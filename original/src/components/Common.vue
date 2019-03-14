<template>
  <b-container fluid>
    <Breadcrumb/>
    <b-row>
        <b-col cols="12" md="6">
            <Carrousel/>
        </b-col>
        <b-col cols="12" md="6" class="mt-2 mt-sm-1">
            <Selector/>
        </b-col>
    </b-row>
    <b-row class="my-5 pb-5">
        <b-col cols="12" class="mt-3"> 
            <related/>
        </b-col> 
    </b-row>
  </b-container fluid>
</template>

<script>
import Breadcrumb from './shared/Breadcrumb.vue'
import Carrousel from './shared/Carrousel.vue'
import Selector from './shared/Selector.vue'
import Related from './shared/Related.vue'

export default {
  name: 'Common',
  components: {
    Breadcrumb,
    Carrousel,
    Selector,
    Related
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
