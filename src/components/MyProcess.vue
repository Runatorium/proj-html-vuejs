<script>
import { store } from '../store';

export default{
    name: 'MyProcess',

    data(){
        return{
            store
        }
        
    },
}

</script>


<template>
<div class="maincontainer d-flex">
    <div class="internalcontainer d-flex">
        <div :style="{backgroundImage: `url(${process.imgurl})`}" v-for="process in store.process" :id="process.id" class="processbox"> 
            <h1 class="title" v-text="process.name"></h1>
            <p class="greytitle" v-text="process.subtitle"></p>
            <h4 class="text" v-text="process.text"></h4>
        </div>
    </div>
</div>
</template>

<style scoped>
    .maincontainer{
        width: 100vw;
        justify-content: center;
    }
    .internalcontainer{
        width: 80%;
        flex-wrap: wrap;
    }
    .processbox{
        margin-top: 10px;
        padding: 5px;
        width: 100%;
        height: 600px;
        background-size: contain;
        background-repeat: no-repeat;
    }
    #nmb1{
        margin-top: 100px;
    }
    #nmb2{
        width: 48%;
        
    }
    #nmb3{
        width: 48%;
        background-color: var(--Pearl-Bush);
        height: 575px;
        margin-left: 41px;
    }
    /*Text chars*/
    .greytitle{
    margin-top: 5px;
    padding: 20px 0px;
    font-size: 16px;
    font-weight: 100;
    color: var(--Manatee);
    }
    .title{
    text-align: center;
    color: var(--Daisy-Bush);
    font-size: 36px;
    }
    .text{
        font-size: 16px;
        color: white;
        font-weight: 100;
        width: 50%;
    }
      /*Text chars*/


    /*specifics*/
    #nmb1 .title{
        text-align: left;
        color: white;
        padding: 15px;
    }
    #nmb1 .text{
        margin-top: 20%;
        margin-left: 68%;
        width: 30%;
    }
    #nmb1 .greytitle{
        position: absolute;
        margin-top: 240px;
        margin-right: 100px;
        right: 0;
        width: 30%;
    }

     /*specifics*/



</style>