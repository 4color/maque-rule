<template>
  <span class="noTips" v-if="props.data.length==0">请拖动参数组件到此:</span>
  <draggable :list="props.data" :group="dragGroup"
             tag="div"
             class="drag-empty"
             item-key="id">
    <template #item="{ element,index }">
      <span class="container">
        <component :is="element.component" :data="element"></component>
        <span v-if="index<props.data.length-1" style="padding-left: 4px; padding-right: 4px; display: inline-block"> , </span>
      </span>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {FuncComps} from "../model/AllowComponents.ts";

const props = defineProps({
  data: {
    type: Array,
    default: []
  }
})

const dragGroup = {
  name: "rule",
  pull: true,
  put: (_: any, form: any) => {
    const fromType = form.el.__draggable_component__.context.element.type;
    if (FuncComps.includes(fromType)) {
      return true;
    } else {
      return false;
    }
  }

}

</script>


<style scoped lang="scss">

</style>
