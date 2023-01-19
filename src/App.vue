    <script>
    import { store } from './store'
    import AppHeader from './components/AppHeader.vue';
    import AppContent from './components/AppContent.vue';
    export default {
      components:{
        AppContent,
        AppHeader
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
    <AppHeader></AppHeader>
    <AppContent></AppContent>
  </div>
</template>
<style lang="scss">
@use './styles/partials/variable.scss' as *;
  @use './styles/generals.scss' as *;
</style>