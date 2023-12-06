<template>
  <div style="display: flex" class="condition-div">
    <drag-flag></drag-flag>
    <div class="noTips" v-if="props.data.length===0">请拖动控制项到我后面:</div>
    <draggable :list="props.data" :group="dragGroup"
               class="container-parent"
               item-key="id"
               @add="AddAfter"
    >
      <template #item="{ element }">
        <div class="container">
          <component :is="element.component" :data="element"></component>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">

import {defineProps} from "vue";
import {ConditionComps} from "../model/AllowComponents.ts";

const props = defineProps({
  data: {
    type: Array,
    default: []
  }
})

const AddAfter = () => {
  //emit("change", props.data)
}

const dragGroup = {
  name: "rule",
  pull: true,
  put: (_: any, form: any) => {
    const fromType = form.el.__draggable_component__.context.element.type;
    if (ConditionComps.includes(fromType)) {
      return true;
    } else {
      return false;
    }
  }
}

</script>


<style scoped lang="scss">

.condition-div {
  border-radius: 4px;
  border-width: thin;
  border-style: solid;
  border-color: #e3e4e8;
  border-radius: 10px;
  padding: 5px;
}
</style>
