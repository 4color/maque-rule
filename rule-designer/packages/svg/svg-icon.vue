<template>
  <svg :class="svgClass" v-bind="$attrs" :style="{ color: color,width: width,height:height }">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
    default: 30,
  },
  height: {
    type: Number,
    default: 30,
  }
});

const iconName = computed(() => `#icon-${props.name}`);
const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon icon-${props.name}`;
  }
  return "svg-icon";
});
</script>

<style scoped>
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>