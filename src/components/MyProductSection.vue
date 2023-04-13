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
    <div class="containerbox d-flex">
        <div class="innerbox d-flex">
                
            <div class="infobox">
                <p id="greytitle">OUR PRODUCTS</p>
                <h2>All our delectable pastries are backed fresh in our Kitchen every morning, and are made with All-Natural, All Organic ingredients</h2>
                <button id="productsbtn">
                    <p>Start Shopping</p>
                </button>
            </div>
            <div class="productcarousel d-flex">
                <div id="arrows">
                    <i id="center" class="fa-solid fa-chevron-left"></i>
                </div>
                <div id="arrowsright">
                    <i id="center" class="fa-solid fa-chevron-right"></i>
                </div>
                <div v-for="product in store.products">
                    <img :src="product.imgurl" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.containerbox{
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
    width: 33%;
    height: 100%;
}
.productcarousel{
    flex-direction: row;
    justify-content: center;
    width: 67%;
    height: 100%; 
}

.productcarousel div{
    margin-top: 200px;
    padding: 5px;
}

#center {
  margin: 0;
}
#arrows{
    position: absolute;
    margin-right: 51.6%;
    margin-top: 475px;
    height: 45px;
    width: 15px;
    background-color: var(--Perfume);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#arrowsright{
    position: absolute;
    margin-left: 51.7%;
    margin-top: 475px;
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
#productsbtn:hover{
    background-color: var(--white);
}
#productsbtn:hover p{
    color: var(--Daisy-Bush);
    border: solid 1px;
    border-radius: 10px;
}
/*----*/
</style>