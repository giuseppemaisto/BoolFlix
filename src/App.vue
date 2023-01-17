    <script>
    import { store } from './store'
    import AppContent from './components/AppContent.vue';
    export default {
      components:{
        AppContent,
      },
      data(){
        return{
          store,
        }
      }
    }
    </script>
<template lang="">
  <div>
    <AppContent></AppContent>
  </div>
</template>
<style lang="scss">
  @use './styles/generals.scss' as *;
</style>