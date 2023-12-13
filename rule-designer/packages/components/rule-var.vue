<template>
  <div style="display: flex">
    <drag-flag></drag-flag>
    <div class="rule-title">
      <div class="rule-title-text">变量:</div>
    </div>
    <div class="rule-back">
      <div class="rule-edit">
        <el-input placeholder="变量名" v-model="props.data.value"></el-input>
        <span class="rule-symbol">=</span>
        <div class="var">
          <drag-container-condition :data="props.data.children"></drag-container-condition>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import DragContainerCondition from "../drag-container/drag-container-condition.vue";
import {computed, defineEmits, defineProps, toRefs, watch} from "vue";
import {IRule, RuleEnum} from "../model/IRule";
import {varStore} from "../store/StoreVar.ts";

const props = defineProps({
  data: {
    type: Object,
    default: {children: [], id: "", type: RuleEnum.var, value: ""} as IRule
  }
})

const userVarStore = varStore();
const mv = computed(() => {
  return JSON.parse(JSON.stringify(props.data?.value));
})

watch(mv, (newVal, oldValue) => {
  userVarStore.Remove(oldValue as string);
  userVarStore.InsertVar(newVal);
}, {deep: true, immediate: true})


</script>


<style scoped lang="scss">

.rule-edit {
  display: flex;
}

.el-input {
  width: 100px;
}


.rule-symbol {
  display: grid;
  padding-left: 3px;
  align-content: center;
}

</style>
