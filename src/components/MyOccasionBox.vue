<script>
import { store } from '../store';

export default{
    name: 'MyOccasionBox',

    data(){
        return{
            store
        }
        
    },
}

</script>

<template>
    <p id="greytitle">CORPORATE & WEDDINGS</p>
    <h2 class="title">Baking Special Moments</h2>
    <div class="container">
        <div class="innerbox">
            <div v-for="special in store.events" >
                <img class="eventimgs" :src="special.imgurl" alt="">
            </div>
      </div>  
    </div>
</template>


<style scoped>

.container{
    width: 100%;
    display: flex;
    justify-content: center;
}
.innerbox{
    width: 80vw;
    display: flex;
    justify-content: center;
}
#greytitle{
    margin-top: 100px;
    font-size: 10px;
    color: var(--Manatee);
    text-align: center; 
}

.eventimgs{
    margin-top: 20px;
    padding: 10px;
    width: 98%;
    height: 800px;
}
.title{
    text-align: center;
    color: var(--Daisy-Bush);
    font-size: 36px;
}

</style>