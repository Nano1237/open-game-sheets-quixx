<template>
  <span
      :class="colorClass"
      class="field"
      v-on:click="selectField(number)">
    <span>
				<span>{{ number }}</span>
			</span>
  </span>
</template>

<script>
import {Game} from "@/classes/Game";

export default {
  name: 'Field',
  created() {
    this.colorClass['field-color-' + this.color] = true;
    this.$root.$on('quixx.fieldSelected', () => {
      if (!this.selected && !Game.isFieldSelectable(this.color, this.number)) {
        this.selectable = false;
        this.colorClass.active = Game.isFieldSelectable(this.color, this.number);
      }
      if (this.selected) {
        this.colorClass.selected = true;
      }
    });
    this.$root.$on('quixx.restart', () => {
      this.selectable = true;
      this.selected = false;
      this.colorClass.active = true;
      this.colorClass.selected = false;
    });
  },
  data: function () {
    return {
      colorClass: {
        active: true,
        selected: false
      },
      selected: false,
      selectable: true
    };
  },
  props: {
    number: Number,
    color: String,
  },
  methods: {
    selectField: function (number) {
      if (this.selected || !this.selectable) {
        return;
      }
      Game.addField(this.color, number);
      this.selected = true;
      this.$root.$emit('quixx.fieldSelected');
    }
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

.selected {
  background-color: black;
}

.field-color-red:not(.active) {
  color: rgba(161, 68, 78, .15);
}

.field-color-yellow:not(.active) {
  color: rgba(248, 199, 69, .15);
}

.field-color-green:not(.active) {
  color: rgba(69, 137, 80, .15);
}

.field-color-blue:not(.active) {
  color: rgba(52, 55, 96, .15);
}
</style>
