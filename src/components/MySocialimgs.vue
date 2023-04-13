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
</style>