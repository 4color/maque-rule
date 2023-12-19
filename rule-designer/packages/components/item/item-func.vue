<template>
  <div class="func">
    <el-select placeholder="函数" v-model="rule.value">
      <el-option :value="item.funcName" v-for="item in alls">{{ item.funcDesc }}</el-option>
    </el-select>

    <span class="funcChar">(</span>
    <drag-container-func :data="props.data?.children"></drag-container-func>
    <span class="funcChar">)</span>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, onMounted, ref, toRefs, watch} from "vue";
import {IFuncName} from "../../model/IConst.ts";
import type {IFunc} from "../../model/IFunc.ts";
import {IRule} from "../../model/IRule.ts";
import DragContainerFunc from "../../drag-container/drag-container-func.vue";

const alls = ref([] as IFunc[])

const props = defineProps({
  data: {
    type: Object,
    default: {} as IRule
  }
})
const mv = toRefs(props).data
const rule = ref({value: "", id: ""} as IRule)

onMounted(() => {

  // @ts-ignore
  alls.value = window[IFuncName];
  // console.log(alls.value)

  // let func = {funcName: "seq.neq", funcDesc: "seq.neq(value)", funcVarCount: 1} as IFunc
  // let func1 = {funcName: "seq.gt", funcDesc: "seq.gt(value)", funcVarCount: 1} as IFunc
  // alls.value.push(func);
  // alls.value.push(func1);
  rule.value = mv.value as IRule;
})

const emit = defineEmits(["update:modelValue"]);
watch(rule, (newVal) => {
  emit("update:modelValue", newVal)
}, {deep: true})

</script>


<style scoped lang="scss">

.funcChar {
  color: red;
  padding-right: 3px;
  padding-left: 3px;
}

</style>