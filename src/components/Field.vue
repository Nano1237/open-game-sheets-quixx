<template>
  <span :class="'field-color-'+color" class="field">
    <span>
				<span>{{ number }}</span>
			</span>
  </span>
</template>

<script>
export default {
  name: 'Field',
  props: {
    number: Number,
    color: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.field {
  position: relative;
  width: 46px;
  height: 46px;

  background: rgb(245, 212, 207);
  border-radius: 7px;
  display: block;
  margin-top: 4px;
  margin-bottom: 4px;
}

.field:first-child {
  margin-left: 4px;
}

.field:not(:last-child) {
  margin-right: 4px;
}

.field:hover {
  cursor: pointer;
}

.field > span {
  display: flex;
  flex-direction: column;
  padding: 0;

  position: absolute;
  width: 46px;
  height: 46px;
  left: 0;
  top: 0;
}

.field > span > span {
  position: static;
  height: 46px;
  left: 0;
  top: 0;

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  margin: 0;
}


.field-color-red {
  color: #A1444E;
  background-color: #F5D4CF;
}

.field-color-yellow {
  color: #F8C745;
  background-color: #F9F1DE;
}

.field-color-green {
  color: #458950;
  background-color: #D2ECE3;
}

.field-color-blue {
  color: #343760;
  background-color: #CCD4E9;
}
</style>
