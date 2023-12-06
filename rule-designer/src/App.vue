<script setup lang="ts">
import {ref} from "vue";
import simple from "./json/simple.json"

const refDesigner = ref();
const newDesigner = () => {
  refDesigner.value.loadData("[]");
}

const SimpleDesigner = () => {
  refDesigner.value.loadData(simple);
}
</script>

<template>
  <div>
    设计器布局演示:
    <el-link @click="newDesigner">【空白设计器】</el-link>
    <el-link @click="SimpleDesigner"> 【简单设计器】</el-link>
    <el-link>【复杂设计器】</el-link>

    <el-link>【导出JSON】</el-link>
  </div>
  <div style="padding: 20px">
    <rule-designer-layout ref="refDesigner"></rule-designer-layout>
  </div>
</template>

<style scoped>

</style>
