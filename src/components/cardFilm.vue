        <script>
        import { store } from '../store';
        export default {
            props:{
                movie: Object,
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
        </ul>
    </div>
</template>
<style lang="">
    
</style>