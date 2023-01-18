import { reactive } from 'vue'

export const store = reactive ({
   
    apikey: 'ed5a553d0f0fa2ed377fc37dff0de52e',
    api_url: 'https://api.themoviedb.org/3/search/movie?api_key=ed5a553d0f0fa2ed377fc37dff0de52e&language=it-IT&query=',
    apiSerie: 'https://api.themoviedb.org/3/search/tv?api_key=ed5a553d0f0fa2ed377fc37dff0de52e&language=en-US&query=',
    movieList : [],
    serieList: [],
  
})