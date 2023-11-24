<template>
  <div class="rule-view" v-if="isView">
    {{rule.dsName}}
    <span v-if="rule.dsField">.{{rule.dsField}}</span>
  </div>
  <div class="rule-edit"  v-if="!isView">
    <el-select placeholder="数据集" v-model="rule.dsName">
      <el-option value="gdxm">供地项目(gdxm)</el-option>
    </el-select>

    <el-select placeholder="字段"  v-model="rule.dsField">
      <el-option value="xmMc">项目名称(xmMc)</el-option>
    </el-select>
  </div>
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
const mv =toRefs(props).data
const rule = ref({value:""} as IRule)

onMounted(()=>{
  rule.value=mv.value;
})

const emit = defineEmits(["update:modelValue"]);
watch(rule,(newVal,oldVal)=>{
  emit("update:modelValue",newVal)
},{deep:true})

/**
 * 是否是查看
 */
const isView=ref(false)

</script>


<style scoped lang="scss">

</style>
