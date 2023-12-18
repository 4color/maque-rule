<script setup lang="ts">
import {onMounted, ref} from "vue";
import simple from "./json/simple.json"
import funcs from "./json/func.json"
import dataset from "./json/dataset.json"
import {ElMessageBox} from "element-plus";

const refDesigner = ref();

onMounted(() => {


  refDesigner.value.SetDsData(dataset);

  refDesigner.value.SetFunc(funcs);

})
const newDesigner = () => {
  refDesigner.value.loadData("[]");
}

const SimpleDesigner = () => {
  refDesigner.value.loadData(simple);
}

const ExportJson = () => {
  ElMessageBox.alert(JSON.stringify(refDesigner.value.getData()._rawValue), "JSON", {
    dangerouslyUseHTMLString: true,
  });

}
</script>

<template>
  <div>

    JS的函数演示：加载了数据集：dataset.json，加载JS函数:func.json。
    <el-link @click="newDesigner">【空白设计器】</el-link>
    <el-link @click="SimpleDesigner"> 【加载JSON】</el-link>
    <el-link @click="ExportJson">【导出JSON】</el-link>


  </div>
  <div style="padding: 20px">
    <rule-designer-layout ref="refDesigner"></rule-designer-layout>
  </div>
</template>

<style scoped>

</style>
