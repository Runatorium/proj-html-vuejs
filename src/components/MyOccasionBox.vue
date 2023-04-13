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
            <div class="eventimgsbox imgbox"  :style="{backgroundImage: `url(${special.imgurl})`}" v-for="special in store.events" >
                <div class="event-info">
                <p id="greytitles" v-text="special.name"></p>
                <h2 class="titles" v-text="special.type"></h2>
                <button id="productsbtn">
                    <p>Shop all products</p>
                </button>
                </div>
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
#greytitles{
    margin-top: 35%;
    font-size: 15px;
    color: var(--Manatee);
    text-align: center; 
}
.titles{
    text-align: center;
    color: var(--white);
    font-size: 36px;
}
.event-info{
 display: none;
}
.eventimgsbox{
    margin-top: 20px;
    padding: 10px;
    width: 800px;
    height: 800px;
    background-size: contain;
    background-repeat: no-repeat;
}
.innerbox .imgbox:first-child:hover{
    background-image: url(../../public/img/corporate-hover-bg.jpg)!important ;
}
.innerbox .imgbox:last-child:hover{
    background-image: url(../../public/img/wedding-hover-bg.jpg)!important ;
}

.title{
    text-align: center;
    color: var(--Daisy-Bush);
    font-size: 36px;
}

#greytitle{
    margin-top: 100px;
    font-size: 10px;
    color: var(--Manatee);
    text-align: center; 
}


#productsbtn p{
    padding: 10px 20px;
    color: var(--white);
}
#productsbtn{
    margin-left: 40%;
    border-style: none;
    border-radius: 7px;
    background-color: var(--Daisy-Bush);
}
</style>