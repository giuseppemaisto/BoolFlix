        <script>
        export default {
            data(){
                return{
                    value: ''
                }
            }
            
        }
        </script>
<template lang="">
    <div class="input-group mb-3">
    
        <input type="text" class="form-control" placeholder="Cerca film o serie  " aria-label="Recipient's username" aria-describedby="button-addon2"
      v-model="value" @keyup.enter="$emit ('buttonClick', value)">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="$emit ('buttonClick', value)">cerca</button>

    </div>
</template>
<style lang="scss">
@use '../styles/partials/variable' as *;
.form-control{
    width: 400px;
    height: 2rem;
    border: 2px solid red;
}
button{
    border:none;
    background-color: white;
    color:red;
    margin-left: 1rem;
    font-size: 15px;
    padding: 0.5rem;
    border: 1px solid red
}
    
</style>