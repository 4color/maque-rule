<script setup lang="ts">
import {ref} from "vue";
import simple from "./json/simple.json"
import Complex from "./json/Complex.json"
import {ElMessage, ElMessageBox} from "element-plus";

const refDesigner = ref();
const newDesigner = () => {
  refDesigner.value.loadData("[]");
}

const SimpleDesigner = () => {
  refDesigner.value.loadData(simple);
}

const ComplexDesigner = () => {
  refDesigner.value.loadData(Complex);
}

const ExportJson = () => {
  ElMessageBox.alert(JSON.stringify(refDesigner.value.getData()._rawValue), "JSON", {
    dangerouslyUseHTMLString: true,
  });

}
</script>

<template>
  <div>
    设计器布局开发:
    <el-link @click="newDesigner">【空白设计器】</el-link>
    <el-link @click="SimpleDesigner"> 【简单设计器】</el-link>
    <el-link @click="ComplexDesigner">【复杂设计器】</el-link>

    <el-link @click="ExportJson">【导出JSON】</el-link>
  </div>
  <div style="padding: 20px">
    <rule-designer-layout ref="refDesigner"></rule-designer-layout>
  </div>
</template>

<style scoped>

</style>
