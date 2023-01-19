<script>
import { store } from '../store'
import AppSearch from './AppSearch.vue';
import axios from 'axios'
export default {
  components: {
    AppSearch
  },
  data(){
    return{
        store
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
<header>

    <AppSearch @buttonClick="ricercaTutto"></AppSearch>
</header>
</template>
<style lang="">

</style>