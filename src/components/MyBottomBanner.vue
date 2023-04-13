<script>
import { store } from '../store';

export default{
    name: 'MyBottomBanner',

    data(){
        return{
            store
        }
        
    },
}

</script>

<template>
    <div class="maincontainer d-flex">
        <div class="interalcontainer">
            <p id="greytitle" >Try our seasonal products</p>
            <h1 class="title" >Order for Pick-up or delivery to your home</h1>
            <button  id="headerbtn">
                <p>Shop Now</p>
            </button>
        </div>
    </div>
</template>

<style scoped>
.maincontainer{
    width: 100%;
    height: 500px;
    margin-top: 100px;
    justify-content: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(../../public/img/call-to-action-bg.jpg);
}
.interalcontainer{
    width: 60%;
}

    #headerbtn{
    margin-top: 15px;
    border-style: none;
    border-radius: 15px;
    }
    #headerbtn p{
    padding: 15px 40px;
    font-size: 14px;
    font-weight: 900;
    color: var(--Daisy-Bush);
    font-weight: 500;
    }
    #headerbtn:hover{
    background-color: var(--Daisy-Bush);
    }
    #headerbtn:hover p{
        color: var(--white);
        border: solid 1px var(--Daisy-Bush);
        border-radius: 15px;
    }
    .title{
    width: 55%;
    color: var(--white);
    font-size: 42px;
    }  

    #greytitle{
    margin-top: 50px;
    padding: 20px 0px;
    font-size: 16px;
    font-weight: 100;
    color: var(--Manatee);
    } 
</style>