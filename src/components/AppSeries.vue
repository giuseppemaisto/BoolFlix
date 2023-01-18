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

                imageEmpty(){
                    if(this.cardSerie.poster_path != null){
                        return `https://image.tmdb.org/t/p/w342/${(this.cardSerie.poster_path)}`
                    }
                    else{
                        return "non presente "
                    }
                },
                stars(valore){
                    let num = Math.floor(valore.vote_average / 2);
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
    <img class="img-cover" :src="imageEmpty()" alt="cardSerie.title">
    
        <div class="card-info">
            <h3 class="card-title">{{cardSerie.original_name}}</h3>
            <h3 class="titolo">titolo:{{cardSerie.name}}</h3>
            <h3>lingua {{cardSerie.original_language}}</h3> 
            <i class="fa-solid fa-star stella-piena" v-for="(item, index) in Math.floor(cardSerie.vote_average / 2) "></i>
                <i class="fa-solid fa-star stella-piena" v-for="(item, index) in (5 - Math.floor(cardSerie.vote_average / 2)) "></i>
            <h3 class="voto">voto {{cardSerie.vote_average}}</h3> 
       
            <img :src="`https://www.countryflagicons.com/FLAT/64/${getLenguage(cardSerie)}.png`">

        </div>
    </div>
</template>
<style lang="scss">
.titolo{
    color:red;

}
.voto{
    color: red;
}
</style>