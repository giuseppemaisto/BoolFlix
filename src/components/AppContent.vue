<script>
import { store } from '../store';
import cardFilm from './cardFilm.vue'
import axios from 'axios'
export default {
  components:{
    cardFilm,
  },
  data(){
    return{
        store,
        searchText: '',
    }
  },
  methods:{
    search(input){
        let apiCall = store.api_url + input;

        axios.get(apiCall).then((response) => {
            store.movieList = response.data.results
        })
    }
  }
}
</script>
<template lang="">
<div class="container my-4">
    <div class="row">

        <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Cerca film " aria-label="Recipient's username" aria-describedby="button-addon2"
      v-model="searchText" @keyup.enter="search(searchText)">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="search(searchText)">cerca</button>

    </div>

</div>
<div>
    ho trovato {{store.movieList.length}} film 
</div>
<div class="row row-cols-5 gap-5 justify-content-between">
    <cardFilm v-for="(item, index) in store.movieList" :key="index" :movie="item"></cardFilm>

</div>
</div>
</template>
<style lang="">

</style>