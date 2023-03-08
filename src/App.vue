<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  },

  data() {
    return {

    }
  },
}
</script>

<template>
  <AppHeader />
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use 'styles/general.scss' as *;
@use 'node_modules/bootstrap/scss/bootstrap' as *;
</style>
