<script>
import { store } from '../store';

export default{
    name: 'MyProductSection',

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
                <p id="greytitle">OUR PRODUCTS</p>
                <h2>All Our Delectable pastries are backed fresh in our Kitchen every morning, and are made with All-Natural, All Organic ingredients</h2>
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

<style>

.container{
    height: 800px;
    width: 100vw;
    justify-content: center;
    background-color: blue;/*debug*/ 
}
.innerbox{
    width: 90%;
    flex-direction: row;
    background-color: aliceblue;
}
.infobox{
    width: 33%;
    height: 100%;
    border-style:dotted;
    border-color: aqua;
}
.productcarousel{
    flex-direction: row;
    justify-content: center;
    width: 67%;
    height: 100%;
    border-style:dotted;
    border-color: aqua;
}

.productcarousel div{
    margin-top: 200px;
    padding: 5px;
}

#center {
  margin: 0;
}
#arrows{
    height: 45px;
    width: 15px;
    background-color: var(--Perfume);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/*----*/

#greytitle{
    margin-top: 200px;
    padding: 20px 0px;
    font-size: 10px;
    color: var(--Manatee);
}
.infobox h2{
    margin-top: 10px;
    color: var(--Daisy-Bush);
    font-size: 36px;
}

#productsbtn{
    margin-top: 100px;
    border-style: none;
    border-radius: 7px;
    background-color: var(--Daisy-Bush);;
}
#productsbtn p{
    padding: 10px 20px;
    color: var(--white);
}
/*----*/
</style>