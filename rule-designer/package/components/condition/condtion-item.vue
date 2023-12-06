<template>
  <drag-container-condition :data="props.data.children">
  </drag-container-condition>
</template>

<script setup lang="ts">

import DragContainerCondition from "../../drag-container/drag-container-condition.vue";
import {defineProps} from "vue";
import {IRule} from "../../model/IRule";

const props = defineProps({
  data: {
    type: Object,
    default: {children: [] as IRule[]} as IRule
  }
})


</script>


<style scoped lang="scss">

</style>
