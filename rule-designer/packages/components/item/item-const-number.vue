<template>
  <el-input class="itemConst" v-model="rule.value" placeholder="数字"></el-input>
</template>

<script setup lang="ts">

import {defineProps, onMounted, ref, toRefs} from "vue";
import {IRule} from "../../model/IRule";


const props = defineProps({
  data: {
    type: Object,
    default: {} as IRule
  }
})
const mv = toRefs(props).data
const rule = ref({value: ""} as IRule)

onMounted(() => {
  rule.value = mv.value as IRule;
})


</script>


<style scoped lang="scss">

.itemConst {
  width: 80px;
}

</style>
