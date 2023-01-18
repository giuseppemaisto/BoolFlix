<script>
import { store } from '../store';
import cardFilm from './cardFilm.vue';
import AppSeries from './AppSeries.vue';
import axios from 'axios'
export default {
  components:{
    cardFilm,
    AppSeries,
  },
  data(){
    return{
        store,
        search: '',
    }
  },
  methods:{
    searchFilm(input){
        let apiCall = store.api_url + input;

        axios.get(apiCall).then((response) => {
            store.movieList = response.data.results
        })
    },
    searchSerie(input){
      let Serie = store.apiSerie + input;

      axios.get(Serie).then((response)=>{
        store.serieList = response.data.results
      })
    },

    ricercaTutto(input){
      this.searchFilm(input);
      this.searchSerie(input);
    }
  }
}
</script>
<template lang="">
<div class="container my-4">
    <div class="row">

        <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Cerca film o serie  " aria-label="Recipient's username" aria-describedby="button-addon2"
      v-model="search" @keyup.enter="ricercaTutto(search)">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="ricercaTutto(search)">cerca</button>

    </div>

</div>
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