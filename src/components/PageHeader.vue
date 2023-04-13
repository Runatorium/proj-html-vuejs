<script>
import { store } from '../store';

export default{
    name: 'PageHeader',

    data(){
        return{
            store
        }
        
    },
}

</script>

<template>
 <div id="header">
    <div class="topheader d-flex">
        <div class="logo">
            <img src="/img/avada-bakery-logo-retina-200x97.png">
        </div>
        <div class="box d-flex">
            <ul class="headernavbar d-flex">
                <li v-for="data in store.menuvoices">{{data}}</li>
            </ul>
        </div>
    </div>
    <div id="headerinfo">
        <p>FRESH & TASTY BAKERY EVERY DAY</p>
        <h1>The Perfect Fresh Bread</h1>
        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Provident ea nihil repellendus 
            consequatur libero, distinctio aut corporis laborum.</h4>
        <button id="headerbtn">
            <p>explore our Products</p>
        </button>
    </div>
 </div>
</template>

<style scoped>
#header{
    height: 800px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(/img/hero-header-bakery.jpg);
}

.topheader{
    justify-content: space-between;
    padding: 0px 10px;
}
/*-------------------------------------*/
/*Header Info*/ 

#headerinfo{
    width: 22%;
    margin-left: 100px;
    margin-top: 150px;
}

#headerinfo p{
    font-size: 10px;
    color: var(--Manatee);
}

#headerinfo h1{
    margin-top: 10px;
    color: var(--Daisy-Bush);
    font-size: 46px;
}
#headerinfo h4{
    margin-top: 10px;
    color: var(--Manatee);
    font-size: 20px;
    font-weight: 100;
}
#headerbtn p{
    padding: 10px 20px;
    font-size: 12px;
    color: var(--Daisy-Bush);
    font-weight: 500;
}
#headerbtn{
    margin-top: 15px;
    border-style: none;
    border-radius: 10px;
}
#headerbtn:hover{
    background-color: var(--Daisy-Bush);
}
#headerbtn:hover p{
    color: var(--white);
    border: solid 1px var(--Daisy-Bush);
    border-radius: 10px;
}
/*Header Info*/ 
/*-------------------------------------*/
/*Header Menu' navbar*/

ul{
    list-style: none;
    flex-direction: row;
    align-items: center;
}

li{
    color: var(--Daisy-Bush);
    padding: 0px 10px;
}


li:hover{
    text-decoration: underline;
}
/*Header Menu' navbar*/
/*-------------------------------------*/
</style>
