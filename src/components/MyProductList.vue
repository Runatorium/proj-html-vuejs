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
                <p id="greytitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laudantium tempora reprehenderit nobis doloribus corrupti Lorem ipsum dolor</p>
                <button id="productsbtn">
                    <p>Shop all products</p>
                </button>
            </div>
            <div class="productcarousel d-flex">
                <div id="arrows">
                    <i id="center" class="fa-solid fa-chevron-left"></i>
                </div>
                <div v-for="product in store.allProducts">
                    <img :src="product.imgurl" alt="">
                </div>
                <div id="arrowsright">
                    <i id="center" class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    margin-top: 150px;
    width: 100%;
    justify-content: center;
}
.innerbox{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.infobox{
    width: 300px;
}
#productsbtn{
    margin-left: 22%;
    border-style: none;
    border-radius: 7px;
    background-color: var(--Daisy-Bush);;
}
#productsbtn p{
    padding: 10px 20px;
    color: var(--white);
}
.infobox h2{
    margin-top: 20px;
    color: var(--Daisy-Bush);
    font-size: 28px;
    text-align: center;
}
#greytitle{
    text-align: center;
    margin-top: 5px;
    padding: 20px 0px;
    font-size: 16px;
    font-weight: 100;
    color: var(--Manatee);
}
img{
    height:320px;
    width: 255px;
    padding: 5px;
    margin-left: 50px;
}
#arrows{
    position: absolute;
    margin-left: 2.9%;
    margin-top: 140px;
    height: 45px;
    width: 15px;
    background-color: var(--Perfume);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#arrowsright{
    position: absolute;
    margin-left: 65.1%;
    margin-top: 140px;
    height: 45px;
    width: 15px;
    background-color: var(--Perfume);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>