<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import './assets/scss/main.scss';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
@import url(//db.onlinewebfonts.com/c/db33e70bc9dee9fa9ae9737ad83d77ba?family=Gotham);
@import url(//db.onlinewebfonts.com/c/a9db6cd9116ff56da3875b35444f0c45?family=GothamBook);

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
