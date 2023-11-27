<template>
  <div style="display:flex;" class="condtion-group">
    <drag-flag></drag-flag>
    <!-- 样式-->
    <div style="display: block">
      <div>
        <!--横线-->
        <div class="group-line group-line-top"></div>
      </div>

      <div class="group-box">
        <div class="group-line-shu group-line-shut-top"></div>
        <div class="group-text">
          或
        </div>
        <div class="group-line-shu group-line-shut-bottom"></div>
      </div>
      <div>
        <!--横线-->
        <div class="group-line group-line-bottom"></div>
      </div>
    </div>
    <div>
      <drag-container-condition-group :data="props.data.children"></drag-container-condition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import DragContainerConditionGroup from "../../drag-container/drag-container-condition-group.vue";
import {defineProps} from "vue";
import {IRule} from "../../model/IRule";


const props = defineProps({
  data: {
    type: Object,
    default: {} as IRule
  }
})

</script>


<style scoped lang="scss">

.condtion-group {
  background-color: #e5fdd6;
  padding: 4px;
  border-radius: 5px;
}

.group-line {
  margin-left: 12px;
  background-color: #E8A567;
  width: 15px;
  height: 2px;
}

.group-line-top {
  margin-top: 10px;
}

.group-line-bottom {
  margin-bottom: 10px;
}

.group-box {
  height: calc(100% - 30px) !important;
}

.group-text {
  background-color: #E8A567;
  width: 30px;
  border-radius: 3px;
  font-size: 10px;
  text-align: center;
  color: white;

}

.group-line-shu {
  margin-left: 12px;
  background-color: #E8A567;
  width: 2px;
  height: 30px;
}

.group-line-shut-top {
  height: calc(50% - 10px) !important;
}

.group-line-shut-bottom {
  height: calc(50% - 6px) !important;
}
</style>
