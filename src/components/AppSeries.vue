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
            titolo {{cardSerie.original_name}}
        </div>
    </li>
    <li class="list-series-item">
        <div>
            lingua {{cardSerie.original_language}}
        </div>
    </li>
    <li class="list-series-item">
        <div>
            voto {{cardSerie.vote_average}}
        </div>
    </li>
</ul>
</div>
</template>
<style lang="">

</style>