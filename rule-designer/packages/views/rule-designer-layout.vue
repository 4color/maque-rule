<template>

  <el-container>
    <el-aside style="width: 150px">
      <panel-index></panel-index>
    </el-aside>
    <el-main>
      <el-form size="small">
        <div class="noTips" v-if="rules.length==0">请拖动内容到此</div>
        <draggable :list="rules" :group="dragGroup"
                   item-key="id"
                   :sort="true"
        >
          <template #item="{ element }">
            <div class="container">
              <component :is="element.component" :data="element" @change="change"></component>
            </div>
          </template>
        </draggable>
      </el-form>
    </el-main>
  </el-container>

</template>

<script setup lang="ts">
import PanelIndex from "../panel/panel-index.vue";
import {IRule} from "../model/IRule.ts";
import {ref} from "vue";
import {RootComps} from "../model/AllowComponents.ts";
import {IDataSet} from "../model/IDataSet.ts";
import {IDataSetName, IFuncName} from "../model/IConst.ts";
import {IFunc} from "../model/IFunc.ts";

const rules = ref([] as IRule[])


const dragGroup = {
  name: "rule",
  pull: true,
  put: (_: any, form: any) => {
    const fromType = form.el.__draggable_component__.context.element.type;
    if (RootComps.includes(fromType)) {
      return true;
    } else {
      return false;
    }
  }
}

const loadData = (data: any) => {
  if (typeof (data) == "string") {
    rules.value = JSON.parse(data);
  } else {
    rules.value = data;
  }
}

const getData = () => {
  return rules;
}

/**
 * Set DataSet dropselect data
 * @param data
 * @constructor
 */
const SetDsData = (data: IDataSet[]) => {
  // @ts-ignore
  let trueData = JSON.parse(JSON.stringify(data));
  eval("window." + IDataSetName + "=trueData;");
}

/**
 * Set Custom Functions
 * @param data
 * @constructor
 */
const SetFunc = (data: IFunc[]) => {
  // @ts-ignore
  let trueData = JSON.parse(JSON.stringify(data));
  eval("window." + IFuncName + "=trueData;");
}

defineExpose({
  loadData,
  getData,
  SetDsData,
  SetFunc
})

const change = (_: any) => {
  //console.log(d)
}


</script>


<style scoped lang="scss">
@import "../css/rule.scss";


</style>
