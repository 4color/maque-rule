<template>
  <el-select placeholder="变量" v-model="rule.value">
    <el-option value="a">a</el-option>
    <el-option value="b">b</el-option>
  </el-select>
</template>

<script setup lang="ts">

import {defineEmits, defineProps, onMounted, ref, toRefs, watch} from "vue";
import {IRule} from "../../model/IRule";

const props = defineProps({
  data: {
    type: Object,
    default: {} as IRule
  }
})
const mv = toRefs(props).data
const rule = ref({value: "", id: ""} as IRule)

onMounted(() => {
  rule.value = mv.value as IRule;
})

const emit = defineEmits(["update:modelValue"]);
watch(rule, (newVal) => {
  emit("update:modelValue", newVal)
}, {deep: true})

</script>


<style scoped lang="scss">


</style>
