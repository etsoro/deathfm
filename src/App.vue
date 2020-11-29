<template>
  <div id="app">
    <Player />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Player from './components/Player.vue';

@Component({
  components: {
    Player
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/fonts';

* {
  box-sizing: border-box;
}

html {
  font-size: 10px;
  height: 100%;
  width: 100%;
}

body {
  font-family: Circular, -apple-system, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #191414;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  width: 100%;
}
</style>
