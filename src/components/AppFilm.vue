        <script>
        import { store } from '../store';
        export default {
            props:{
                movie: Object,
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
                }
            }
        }
        </script>
<template lang="">
    <div class="col card">
        <div class="card-container">
            <h3 class="card-title">{{movie.title}}</h3>
        </div>

        <ul class="list-film">
            <li class="list-film-item">
                <div>
                    titolo {{movie.original_title}}
                </div>
            </li>
            <li class="list-film-item">
                <div>
                    lingua {{movie.original_language}}
                    
                </div>
            </li>
            <li class="list-film-item">
                <div>
                    voto {{movie.average}}
                </div>
            </li>
            <li>
                <img :src="`https://www.countryflagicons.com/FLAT/64/${getLenguage(movie)}.png`" alt="{{ movie.original_language }}">
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
.card{
    height: 100%;

    
}
    
</style>