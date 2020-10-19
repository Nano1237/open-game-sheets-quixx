<template>
  <div class="row-wrapper" :class="'color-'+color">
    <span>
      <!--  https://github.com/FortAwesome/vue-fontawesome -->
      ->
    </span>
    <span v-if="color === 'red' || color === 'yellow'" :class="'color-'+color" class="row">
      <Field
          v-for="item in [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
          :number="item"
          :color="color"
          v-bind:key="item"/>
    </span>
    <span v-else :class="'color-'+color" class="row">
      <Field
          v-for="item in [12,11,10,9,8,7,6,5,4,3,2]"
          :number="item"
          :color="color"
          v-bind:key="item"/>
    </span>
    <span>
      LOCK
    </span>
  </div>
</template>

<script>
import Field from "@/components/Field";

export default {
  name: 'Row',
  components: {
    Field,
  },
  props: {
    color: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.row-wrapper {
  display: flex;
  flex-direction: row;
  position: relative;
}

.row-lock {
  display: block;
  position: relative;
  width: 41px;
  height: 36px;
  left: 588px;
  top: 9px;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  align-self: center;
  margin: 0px 0px;
}

.row-lock:after {
  content: '';

  position: absolute;
  width: 6px;
  height: 6px;
  left: -6px;
  top: 15px;

  background: #754048;
}

.row-lock:before {
  content: '';

  position: absolute;
  width: 36px;
  height: 36px;
  left: 0px;
  top: 0px;

  background: #f5d4cf;
  border: 2px solid #754048;
  box-sizing: border-box;
  border-radius: 25px;
}

.lock {
  /* lock */

  position: relative;
  width: 36px;
  height: 36px;
}

.lock-symbol {
  position: absolute;
  width: 16px;
  height: 21px;
  left: 12.78px;
  top: 5.38px;

  font-family: 'Font Awesome 5 Free';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: rgb(161, 68, 78);

  transform: rotate(14deg);
}

.row {
  display: flex;
  flex-direction: row;
  padding: 0;

  position: static;
  width: 554px;
  height: 54px;
  right: 5px;
  top: calc(50% - 54px / 2);
  border-radius: 7px;
  flex: none;
  order: 0;
  align-self: center;
  margin: 5px 0;
}


.color-red {
  background-color: #A1444E;
}

.color-red.row {
  background-color: #754048;
}

.color-yellow {
  background-color: #F8C745;
}

.color-yellow.row {
  background-color: #A87A4E;
}


.color-green {
  background-color: #458950;
}

.color-green.row {
  background-color: #476F55;
}

.color-blue {
  background-color: #343760;
}

.color-blue.row {
  background-color: #3A3048;
}

</style>
