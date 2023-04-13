<script>
import { store } from '../store';

export default{
    name: 'MyLocation',

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
        <div class="txt">
            <p id="greytitle">Locations</p>
            <h2 class="title">Visit Our Bakeries</h2>
        </div>
        <div class="locationbox d-flex">
            <div class="location" :style="{backgroundImage: `url(${location.imgurl})`}" v-for="location in store.locations">  
            </div>
        </div>
        <div class="locationtxt d-flex">
            <div :class="location.locnumber" v-for="location in store.locations">
                <h2 class="title" v-text="location.city"></h2>
                <div class="hours d-flex">
                    <div>
                        <p>CALL US</p>
                        <p v-text="location.Pnumber"></p>
                    </div>
                    <div>
                        <p>Open All week</p>
                        <p v-text="location.hour"></p>
                    </div>
                    <div>
                        <button id="headerbtn">
                            <p>view map</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>
</template>


<style scoped>
.maincontainer{
    width: 100%;
    height: 800px;
    justify-content: center;
}

.internalcontainer{
    width: 80%;
    flex-direction: column;
    
}
    #greytitle{
    text-align: center;
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
    .txt{
        width: 100%;
        height: 100px;
        margin-bottom: 40px;
    }
    .location{
        width: 50%;
        height: 550px;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .locationbox{
        flex-direction: row;
    }

    .locationtxt{
        flex-direction: row;
    }
    .nmb1{
        margin-top: -46px;
        background-color: var(--Manatee-light);
        width: 50%;
        height: 150px;
    }
    .nmb2{
        margin-top: -46px;
        background-color: var(--Tan-LightVibrant);
        width: 50%;
        height: 150px;
    }
    .hours{
        font-size: 16px;
        color: var(--Manatee);
        text-align: center; 
        flex-direction: row;
        justify-content: space-between;
    }
    .title{
    text-align: center;
    color: var(--Daisy-Bush);
    font-size: 36px;
    }
    #headerbtn{
    margin-top: 15px;
    border-style: none;
    border-radius: 7px;
    }
    #headerbtn p{
    padding: 10px 20px;
    font-size: 12px;
    color: var(--Daisy-Bush);
    font-weight: 500;
    }
</style>