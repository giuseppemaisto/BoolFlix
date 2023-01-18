<script>
import { store } from '../store';
export default {
    props:{
        cardSerie: Object,
    },
    data(){
        return{
            store,
        }
    },
    methods: {
                getLenguage(valore){
                    let leng = ''
                    if(valore.original_language){
                        switch(valore.original_language){
                            case 'en':
                                leng = 'gb'
                                break;

                                default:
                                    leng = (valore.original_language)
                                    break;

                        }
                        let upperLeng = leng.toUpperCase()
                        return upperLeng
                      
                    }
                }
            }
   
}
</script>
<template lang="">
<div class="col card">
   
<div class="card-container">
    <h3 class="card-title">{{cardSerie.name}}</h3>
</div>

<ul class="list-series">
    
    <li class="list-series-item">
        <div>
            titolo: {{cardSerie.original_name}}
        </div>
    </li>
    <li class="list-series-item">
        <div>
            lingua:{{cardSerie.original_language}}
        </div>
    </li>
    <li class="list-series-item">
        <div>
            voto: {{cardSerie.vote_average}}
        </div>
    </li>
    <li class="list-series-item">
        <img :src="`https://www.countryflagicons.com/FLAT/64/${getLenguage(cardSerie)}.png`">
    </li>
</ul>
</div>
</template>
<style lang="">

</style>