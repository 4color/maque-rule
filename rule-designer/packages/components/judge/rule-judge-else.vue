<template>
  <drag-container-judge-else :data="props.data"></drag-container-judge-else>
</template>

<script setup lang="ts">

import DragContainerJudgeElse from "../../drag-container/drag-container-judge-else.vue";
import { defineProps} from "vue";

const props = defineProps({
  data: {
    type: Array,
    default: []
  }
})

</script>


<style scoped lang="scss">

</style>
