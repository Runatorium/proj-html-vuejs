<script>
import PageHeader from './components/PageHeader.vue';
import MyProductSection from './components/MyProductSection.vue';
import { store } from './store.js'


export default{
  components: {
    PageHeader,
    MyProductSection,
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
  <MyProductSection></MyProductSection>
</template>

<style scoped>

</style>
