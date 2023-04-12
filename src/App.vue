<script>
import PageHeader from './components/PageHeader.vue';
import MyProductSection from './components/MyProductSection.vue';
import MyOccasionBox from './components/MyOccasionBox.vue';
import MyProductList from './components/MyProductList.vue';
import { store } from './store.js'


export default{
  components: {
    PageHeader,
    MyProductSection,
    MyOccasionBox,
    MyProductList,
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
  <MyProductList></MyProductList>
</template>

<style scoped>

</style>
