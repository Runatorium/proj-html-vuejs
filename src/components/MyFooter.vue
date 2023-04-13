<script>
import { store } from '../store';

export default{
    name: 'MyFooter',

    data(){
        return{
            store
        }
        
    },
}

</script>

<template>
    <div class="footer">
        <div class="leftbox">
            <div>
                <img src="/img/avada-bakery-logo-retina-200x97.png" alt="">
            </div>
            <div>
                <ul class="headernavbar d-flex">
                <li v-for="data in store.menuvoices">{{data}}</li>
            </ul>
            </div>
            <div>
                <p id="greytitle">
                    Copyright 2012 - 2020 | Avada Theme By TeamFusion | All Rights Reserved | Powered By WorldPress
                </p>
            </div>
        </div>
        <div class="rightbox">
            <div>
                <h2 class="title">Subscribe to Our News Letter</h2>
            </div>
            <div class="emailbox d-flex">
                <form id="emailcheck" class="row g-3">
                <div>
                    <input type="email" class="form-control" id="myinputemail" placeholder="Enter Email Address">
                </div>
                <div>
                    <button id="submitbtn"><p>Subscribe</p></button>
                </div>
                </form>
            </div>
            <div class="sociallinks d-flex">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-pinterest-p"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .footer{
        display: flex;
        flex-direction: row;
    }
    .leftbox{
        margin-left: 100px;
        width: 60%;
    }
    .rightbox{
        margin-right: 100px;
        width: 40%;
    }
    .leftbox div{
        padding-top: 20px;
        padding-bottom: 20px;
    }
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
    #greytitle{
    
    margin-top: 5px;
    padding: 20px 0px;
    font-size: 12px;
    font-weight: 100;
    color: var(--Manatee);
    }
    .rightbox .title{
        text-align: end;
    }

    #emailcheck{
        display: flex;
        flex-direction: row;
    }
    #myinputemail{
        padding: 10px 30px;
        border: solid 1px grey;
        border-radius: 5px;
        margin-right: 20px;
    }
    #submitbtn{
    border-style: none;
    border-radius: 7px;
    background-color: var(--Daisy-Bush);
    }
    #submitbtn p{
    padding: 10px 20px;
    font-size: 12px;
    color: var(--white);
    font-weight: 500;
    }
    #submitbtn:hover{
    background-color: var(--white);
    }
    #submitbtn:hover p{
        color: var(--Daisy-Bush);
        border: solid 1px;
        border-radius: 10px;
    }
    .emailbox{
        justify-content: flex-end;
        margin-top: 40px;
    }
    .sociallinks{
        justify-content: flex-end;
        margin-top: 100px;
    }
    .sociallinks i{
        padding: 20px;
        color: var(--Daisy-Bush) ;
    }
</style>