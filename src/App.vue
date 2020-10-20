<template>
  <div id="quixx">
    <Row color="red"/>
    <Row color="yellow"/>
    <Row color="green"/>
    <Row color="blue"/>
    <WrongRow/>
    Punkte: {{ points }}
    <button v-on:click="restart()">Restart</button>
  </div>
</template>

<script>

import Row from "@/components/Row";
import WrongRow from "@/components/WrongRow";
import {Game} from "@/classes/Game";

export default {
  name: 'Quixx',
  created() {
    this.$root.$on('quixx.fieldSelected', () => {
      this.points = Game.getPoints();
    });
  },
  data() {
    return {
      points: 0
    }
  },
  methods: {
    restart() {
      Game.restart();
      this.$root.$emit('quixx.restart');
      this.$root.$emit('quixx.fieldSelected');
    }
  },
  components: {
    WrongRow,
    Row
  }
}
</script>

<style>
#quixx {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  line-height: 35px;
}

body {
  margin: 0;
}
</style>
