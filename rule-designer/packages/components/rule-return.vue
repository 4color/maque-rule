<template>
  <div style="display: flex">
    <div class="rule-title">
      <div class="rule-title-text">返回:</div>
    </div>
    <div class="rule-back">
      <div class="rule-view">

      </div>
      <div class="rule-edit">
        <el-select placeholder="返回值"  v-model="rule.value">
          <el-option :value="true">返回真(true）</el-option>
          <el-option :value="false">返回假(false）</el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {defineProps, onMounted, ref, toRefs} from "vue";
import {IRule} from "../model/IRule";

const props = defineProps({
  data: {
    type: Object,
    default: {children:[]} as IRule
  }
})
const mv =toRefs(props).data
const rule = ref({} as IRule)

onMounted(()=>{
  rule.value=mv.value;
})
</script>


<style scoped lang="scss">
@import "../css/rule.scss";

.rule-edit {
  display: flex;
}

.el-input {
  width: 100px;
}

</style>
