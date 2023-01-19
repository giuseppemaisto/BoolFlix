<script>
import { store } from '../store';
import AppFilm from './AppFilm.vue';
import AppSeries from './AppSeries.vue';
import axios from 'axios'
export default {
  components:{
    AppFilm,
    AppSeries,
  },
  data(){
    return{
        store,
        
    }
  },
  
}
</script>
<template lang="">
<div class="container my-4">
  <div>
      ho trovato {{store.movieList.length}} contenuti 
  </div>
   
  <div class="row row-cols-5 gap-5 justify-content-between">
      <cardFilm v-for="(item, index) in store.movieList" :key="index" :movie="item"></cardFilm>
      <AppSeries v-for="(item, index) in store.serieList" :key="index" :cardSerie="item"></AppSeries>
  
  </div>

</div>

</template>
<style lang="">

</style>