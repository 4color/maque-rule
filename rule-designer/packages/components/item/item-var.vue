<template>
  <el-select placeholder="变量" v-model="rule.value">
    <el-option :value="item" v-for="item in allVars">{{ item }}</el-option>
  </el-select>
</template>

<script setup lang="ts">

import {computed, defineEmits, defineProps, onMounted, ref, toRefs, watch} from "vue";
import {IRule} from "../../model/IRule";
import {varStore} from "../../store/StoreVar.ts";

const props = defineProps({
  data: {
    type: Object,
    default: {} as IRule
  }
})

const userVarStore = varStore();
const mv = toRefs(props).data
const rule = ref({value: "", id: ""} as IRule)
const allVars = computed(() => {
  return userVarStore.vars;
})

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
