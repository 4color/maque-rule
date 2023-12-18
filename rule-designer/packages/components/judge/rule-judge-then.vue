<template>
  <drag-container-judge-then :data="props.data"></drag-container-judge-then>
</template>

<script setup lang="ts">

import DragContainerJudgeThen from "../../drag-container/drag-container-judge-then.vue";
import {defineProps} from "vue";
import {IRule} from "../../model/IRule";

const props = defineProps({
  data: {
    type: Array,
    default: [] as IRule[]
  }
})

</script>


<style scoped lang="scss">


</style>
