<template>
  <div style="display: block">
    <div class="noTips" v-if="props.data.length==0">请拖动内容到我后面:</div>
    <draggable :list="props.data" :group="dragGroup"
               class="container-parent-group"
               item-key="id">
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
import {GroupsComps} from "../model/AllowComponents";

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
    if (GroupsComps.includes(fromType)) {
      return true;
    } else {
      return false;
    }
  }
}

</script>


<style scoped lang="scss">

</style>
