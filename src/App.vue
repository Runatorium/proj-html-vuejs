<script>
import PageHeader from './components/PageHeader.vue';
import MyProductSection from './components/MyProductSection.vue';
import MyOccasionBox from './components/MyOccasionBox.vue';
import MyProductList from './components/MyProductList.vue';
import MyProcess from './components/MyProcess.vue';
import MyLocation from './components/MyLocation.vue';
import { store } from './store.js'


export default{
  components: {
    PageHeader,
    MyProductSection,
    MyOccasionBox,
    MyProductList,
    MyProcess,
    MyLocation,
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
  <MyProcess></MyProcess>
  <MyLocation></MyLocation>
</template>

<style scoped>

</style>
