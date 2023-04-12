<script>
import { store } from '../store';

export default{
    name: 'MyProductList',

    data(){
        return{
            store
        }
        
    },
}

</script>


<template>
     <div class="container d-flex">
        <div class="innerbox d-flex">
                
            <div class="infobox">
                <h2>Find a Perfectly Fresh Baked product perfect for you</h2>
                <p id="greytitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laudantium tempora reprehenderit nobis doloribus corrupti.</p>
                <button id="productsbtn">
                    <p>Start Shopping</p>
                </button>
            </div>
            <div class="productcarousel d-flex">
                <div id="arrows">
                    <i id="center" class="fa-solid fa-chevron-left"></i>
                </div>
                <div v-for="product in store.products">
                    <img :src="product.imgurl" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    height: 800px;
    width: 100vw;
    justify-content: center;
}
</style>