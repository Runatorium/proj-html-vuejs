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
            <h2 v-text="process.number"></h2>
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
    h2{
        color: var(--white);
        font-size: 52px;
        font-weight: 100;
    }
      /*Text chars*/


    /*specifics 1*/
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
    #nmb1 h2{
        position: absolute;
        right: 0;
        margin-right: 200px;
        margin-top: -60px;
    }

     /*specifics*/

     /*specifics 2*/
     #nmb2 .title{
        text-align: left;
        color: white;
        padding: 15px;
    }
    #nmb2 .text{
        margin-top: 35%;
        width: 50%;
        margin-left: 20px;
    }
    #nmb2 .greytitle{
        position: absolute;
        margin-top: 200px;
        margin-left: 20px;
        width: 30%;
    }
    #nmb2 h2{
        position: absolute;
        margin-left: 35%;
        margin-top: -60px;
    }
      /*specifics*/

      /*specifics 3*/
      #nmb3 .title{
        margin-top: 20%;
        width: 70%;
        margin-left: 15%;
        text-align: center;
        color: var(--Daisy-Bush);
    }

    #nmb3 .text{
        width: 50%;
        margin-left: 20px;
    }

    #nmb3 .greytitle{
        position: relative;
        margin-left: 20px;
        width: 30%;
    }
   
      /*specifics */
      #nmb4 h2{
        position: absolute;
        right: 0;
        margin-right: 200px;
        margin-top: -40px;
    }
    #nmb4 .title{
        text-align: left;
        color: white;
        padding: 15px;
    }
    #nmb4 .text{
        margin-top: 20%;
        width: 30%;
        margin-left: 10px;
    }
    #nmb4 .greytitle{
        position: absolute;
        margin-top: 250px;
        margin-left: 10px;
    }
</style>