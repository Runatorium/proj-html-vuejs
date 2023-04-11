<script>
import PageHeader from './components/PageHeader.vue';
import { store } from './store.js'


export default{
  components: {
    PageHeader,
  },

  data () {
   return {
    store
   }
 },
  
}
 
          
</script>


<template>
  <PageHeader></PageHeader>
</template>

<style scoped>

</style>
