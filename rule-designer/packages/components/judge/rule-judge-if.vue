<template>
  <drag-container-judge-if :data="props.data"></drag-container-judge-if>
</template>

<script setup lang="ts">

import DragContainerJudgeIf from "../../drag-container/drag-container-judge-if.vue";
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
