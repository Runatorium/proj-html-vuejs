<script>
import PageHeader from './components/PageHeader.vue';
import MyProductSection from './components/MyProductSection.vue';
import MyOccasionBox from './components/MyOccasionBox.vue';
import { store } from './store.js'


export default{
  components: {
    PageHeader,
    MyProductSection,
    MyOccasionBox,
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
  <MyOccasionBox></MyOccasionBox>
</template>

<style scoped>

</style>
