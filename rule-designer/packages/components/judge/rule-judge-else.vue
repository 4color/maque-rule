<template>
  <drag-container-judge-else :data="data"></drag-container-judge-else>
</template>

<script setup lang="ts">

import DragContainerJudgeElse from "../../drag-container/drag-container-judge-else.vue";
import {defineEmits, defineProps, onMounted, ref, toRefs, watch} from "vue";
import {IRule} from "../../model/IRule.ts";

const props = defineProps({
  data: {
    type: Array,
    default: []
  }
})

</script>


<style scoped lang="scss">

</style>
