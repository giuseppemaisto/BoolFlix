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
                },
                stars(valore){
                    let num = math.floor(valore.vote_average / 2);
                    let starsarray = []
                    for(let i = 0; i < num; i++){
                        starsarray.push('fa-solid fa star')
                    }

                    let starEmpty = 5 - num;
                    for(let i = 0; i < starEmpty; i++){
                        starsarray.push('fa regular fa-star')
                    }
                    return starsarray
                }
            }
   
}
</script>
<template lang="">
<div class="card">
   
    <img class="img-cover" :src="`https://image.tmdb.org/t/p/w342${cardSerie.poster_path}`" alt="">
        <div class="card-info">
            <h3 class="card-title">{{cardSerie.title}}</h3>
            <h3>titolo {{cardSerie.original_title}}</h3>
            <h3>lingua {{cardSerie.original_language}}</h3> 
            <h3>voto {{cardSerie.average}}</h3> 
            <div>
                <i v-for="(item, index) in stars(cardSerie)" :key="index" :class="item"></i>
            </div>
            <img :src="`https://www.countryflagicons.com/FLAT/64/${getLenguage(cardSerie)}.png`">

        </div>
    </div>
</template>
<style lang="">

</style>