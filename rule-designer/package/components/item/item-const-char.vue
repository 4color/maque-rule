<template>
  <el-input class="itemConst" v-model="rule.value" placeholder="文本"></el-input>
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

// const emit = defineEmits(["update:modelValue"]);
// watch(rule,(newVal,oldVal)=>{
//   emit("update:modelValue",newVal)
// },{deep:true})

</script>


<style scoped lang="scss">

.itemConst {
  width: 80px;
}

</style>
