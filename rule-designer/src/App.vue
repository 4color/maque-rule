<script setup lang="ts">
import {onMounted, ref} from "vue";
import simple from "./json/simple.json"
import Complex from "./json/Complex.json"
import {ElMessage, ElMessageBox} from "element-plus";
import {IDataSet} from "../packages/model/IDataSet";
import {IFunc} from "../packages/model/IFunc";

const refDesigner = ref();

onMounted(() => {

  let arr = [] as IDataSet[];
  let ds = {
    dsName: "gdxm",
    dsDesc: "Project",
    fields: [{fieldName: "id", filedDesc: "ID"}, {fieldName: "name", filedDesc: "Filed Name"}]
  } as IDataSet

  let ds2 = {
    dsName: "product",
    dsDesc: "You Product",
    fields: [{fieldName: "no", filedDesc: "Product No"}, {fieldName: "name", filedDesc: "Product Name"}]
  } as IDataSet
  arr.push(ds);
  arr.push(ds2)
  refDesigner.value.SetDsData(arr);

  let arrFunc = [] as IFunc[];

  let func = {funcName: "seq.neq", funcDesc: "seq.neq(value)", funcVarCount: 1} as IFunc
  arrFunc.push(func);

  let func1 = {funcName: "math.abs", funcDesc: "math.abs(d)", funcVarCount: 1} as IFunc
  arrFunc.push(func1);

  refDesigner.value.SetFunc(arrFunc);

})
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
