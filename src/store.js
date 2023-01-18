import { reactive } from 'vue'

export const store = reactive ({
    api_key: 'api_key=ed5a553d0f0fa2ed377fc37dff0de52e&lenguage=en-US&query=',
    apikey: 'ed5a553d0f0fa2ed377fc37dff0de52e',
    api_url: 'https://api.themoviedb.org/3/search/movie?api_key=ed5a553d0f0fa2ed377fc37dff0de52e&language=it-IT&query=',
    apiSerie: 'https://api.themoviedb.org/3/search/tv?',
    movieList : [],
    serieList: [],
    LangList : [
        'us','it','fr'
    ]
})