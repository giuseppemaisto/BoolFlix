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
<div class="container-content my-4">

   <h1>I FILM DI NETFLIX</h1>
  <div class="movie-container">
      <AppFilm v-for="(item, index) in store.movieList" :key="index" :movie="item"></AppFilm>
  </div>
  <h1>LE SERIE TV DI NETFLIX</h1>
  <div class="movie-container">
      <AppSeries v-for="(item, index) in store.serieList" :key="index" :cardSerie="item"></AppSeries>
  
  </div>

</div>

</template>
<style lang="scss">
@use '../styles/partials/variable' as *;

.container-content{
  background-color: $black;
  width: 100%;

  h1{
    color: $secondary-color;
    margin-left: 1rem;

  }

  .movie-container{
    width: 100%;
    display: flex;
    justify-content:space-between;
    padding: 1rem;
    overflow-x: scroll;
   
    
    
    
    
  }
  ::-webkit-scrollbar{
  width:0.8em;
  height:0.8em;
  background: red;
  margin-right: 10px;
}
::-webkit-scrollbar-thumb:hover{
  background-color:white ;
  border: none;
}
  
}
</style>