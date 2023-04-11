<script>
import MyHeader from './components/MyHeader.vue';
import { store } from './store.js'


export default{
  components: {
    MyHeader,
  },

  data () {
   return {
    store
   }
 },
  
}
 
          
</script>


<template>
  <MyHeader></MyHeader>
</template>

<style scoped>

</style>
