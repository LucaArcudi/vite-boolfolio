<script>
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppMain
  },

  data() {
    return {

    }
  },
}
</script>

<template>
  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@use 'styles/general.scss' as *;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
