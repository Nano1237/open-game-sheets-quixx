<template>
  <div id="app">
    <Row color="red"/>
    <Row color="yellow"/>
    <Row color="green"/>
    <Row color="blue"/>
    <WrongRow/>
  </div>
</template>

<script>

import Row from "@/components/Row";
import WrongRow from "@/components/WrongRow";

export default {
  name: 'App',
  components: {
    WrongRow,
    Row
  }
}
</script>

<style>
#app {
  font-family: Roboto,  Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  line-height: 35px;
}

body{
  margin: 0;
}
</style>
