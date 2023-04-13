<script>
import { store } from '../store';

export default{
    name: 'MySocialimgs',

    data(){
        return{
            store
        }
        
    },
}

</script>

<template>
    <div class="SocialMediaBox d-flex">
        <div class="socialmediainnerbox d-flex" >
            <button id="followbtn">
                
                <p> <i class="fa-brands fa-instagram"></i> Follow Us</p>
            </button>
            <div class="imgs" :id="imgs.mbr" :style="{backgroundImage: `url(${imgs.url})`}" v-for="imgs in store.socialmediaimgs">
                <p id="greytitle" v-text="imgs.subtitle"></p>
                <h2 class="title" v-text="imgs.title"></h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
.SocialMediaBox{
    width: 100%;
    justify-content: center;
}
.socialmediainnerbox{
    margin-top: 100px;
    width: 80%;
    height: 600px;
    justify-content: space-between;
    flex-wrap: wrap;
}
.imgs{
    width: calc(100% / 4 - 15px);
    height: 400px;
    background-size: contain;
    background-repeat: no-repeat;
}
#nmb2{
    width: calc(100% / 2);
    height: 356px;
    background-color: var(--Pearl-Bush);
}
#greytitle{
    padding: 20px 0px;
    font-size: 16px;
    color: var(--Manatee);
    text-align: center;
    margin-top: 80px;
}
.title{
    text-align: center;
    color: var(--Daisy-Bush);
    font-size: 36px;
    font-weight: bolder;
}
    #followbtn{
    position: absolute;
    margin-top: 15px;
    border-style: none;
    border-radius: 7px;
    background-color: var(--Daisy-Bush);
    margin-left: 37.5%;
    margin-top: 220px;
    }
    #followbtn p{
    padding: 10px 20px;
    font-size: 12px;
    color: var(--white);
    font-weight: 500;
    }
</style>