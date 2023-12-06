<template>
  <el-select placeholder="运算" v-model="rule.value" >
    <el-option
        v-for="item in IDataOperator"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    />
  </el-select>

</template>

<script setup lang="ts">


import {defineEmits, defineProps, onMounted, ref, toRefs, watch} from "vue";
import {IRule} from "../../model/IRule";
import {IDataOperator} from "../../model/DataItem"

const props = defineProps({
  data: {
    type: Object,
    default: {} as IRule
  }
})
const mv =toRefs(props).data
const rule = ref({value:""} as IRule)

onMounted(()=>{
  rule.value=mv.value as IRule;
})

const emit = defineEmits(["update:modelValue"]);
watch(rule,(newVal)=>{
  emit("update:modelValue",newVal)
},{deep:true})
</script>


<style scoped lang="scss">

</style>
