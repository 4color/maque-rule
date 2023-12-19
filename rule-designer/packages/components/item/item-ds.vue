<template>
  <div class="rule-view" v-if="isView">
    {{ rule.dsName }}
    <span v-if="rule.dsField">.{{ rule.dsField }}</span>
  </div>
  <div class="rule-edit" v-if="!isView">
    <el-select placeholder="数据集" v-model="rule.dsName">
      <el-option :value="item.dsName" v-for="item in alls">{{ item.dsName }}({{ item.dsDesc }})</el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">


import {defineEmits, defineProps, onMounted, ref, toRefs, watch} from "vue";
import {IRule} from "../../model/IRule";
import {IDataSet} from "../../model/IDataSet.ts";
import {IDataSetName} from "../../model/IConst.ts";

const props = defineProps({
  data: {
    type: Object,
    default: {} as IRule
  }
})
const mv = toRefs(props).data
const rule = ref({value: ""} as IRule)
const alls = ref([] as IDataSet[])

onMounted(() => {
  // @ts-ignore
  alls.value = window[IDataSetName];
  rule.value = mv.value as IRule;
})

const emit = defineEmits(["update:modelValue"]);
watch(rule, (newVal, _) => {
  emit("update:modelValue", newVal)
}, {deep: true})


/**
 * 是否是查看
 */
const isView = ref(false)

</script>


<style scoped lang="scss">

</style>
