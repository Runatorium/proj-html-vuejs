<script>
import { store } from '../store';

export default{
    name: 'MyHeader',

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
            <img src="../../public/img/avada-bakery-logo-retina-200x97.png">
        </div>
        <div class="box d-flex">
            <ul class="headernavbar d-flex">
                <li v-for="data in store.menuvoices">{{data}}</li>
            </ul>
        </div>
    </div>
    <div id="headerinfo">

    </div>
 </div>
</template>

<style scoped>
#header{
    height: 600px;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(../../public/img/bakery-process-3.jpg);
}

.topheader{
    justify-content: space-between;
    padding: 0px 10px;
}
ul{
    list-style: none;
    flex-direction: column;
    align-items: center;
}

li{
    padding: 0px 10px;
}

li:hover{
    color: purple;
    text-decoration: underline;
}


</style>
