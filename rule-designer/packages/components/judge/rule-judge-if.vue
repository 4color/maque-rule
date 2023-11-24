<template>
  <drag-container-judge-if :data="data"></drag-container-judge-if>
</template>

<script setup lang="ts">

import DragContainerJudgeIf from "../../drag-container/drag-container-judge-if.vue";
import {defineEmits, defineProps, onMounted, ref, toRefs, watch} from "vue";
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
