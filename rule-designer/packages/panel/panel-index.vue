<template>


  <div class="panel">
    <div class="title" style="color: red">回收站</div>
    <div>
      <draggable :list="Recycles" :sort="false"
                 :group="{ name: 'rule', pull: false, put: true }"
                 item-key="type"
                 @add="RecycleEnd"
      >
        <template #item="{ element }">
          <div class="panel-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
  </div>

  <div class="panel">
    <div class="title">控制</div>
    <div>
      <draggable :list="Controls" :sort="false"
                 :group="{ name: 'rule', pull: 'clone', put: false }"
                 :clone="AddControl"
                 :move="OnMoveControl"
                 item-key="type"
      >
        <template #item="{ element }">
          <div class="panel-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
  </div>

  <div class="panel">
    <div class="title">条件项</div>
    <div>
      <draggable :list="ControlContions" :sort="false"
                 :group="{ name: 'rule', pull: 'clone', put: false }"
                 :clone="AddControl"
                 :move="OnMoveControl"
                 draggable=".item"
                 item-key="type"
      >
        <template #item="{ element }">
          <div class="panel-item" :class="{'item':!element.group}">
            <span> {{ element.name }} </span>
            <span v-if="element.group"> > </span>
          </div>
        </template>
      </draggable>
    </div>
  </div>
  <div class="panel">
    <div class="title">控制项</div>
    <div>
      <draggable :list="ControlItems" :sort="false"
                 :group="{ name: 'rule', pull: 'clone', put: false }"
                 :clone="AddControlItem"
                 :move="OnMoveControlItem"
                 draggable=".item"
                 item-key="type"
      >
        <template #item="{ element, index }">
          <div class="panel-item" :class="{'item':!element.group}">
            <div v-if="!element.group">
              {{ element.name }}
            </div>
            <div v-if="element.group" style="display: flex">
              <div style="width: 90%">
                <span style="width: 100%;display: block" @click="SetIndex(index)">{{ element.name }}</span>
                <div v-if="ShowIndex(index)" class="floatDiv">
                  <draggable :list="element.children" :sort="false"
                             :group="{ name: 'rule', pull: 'clone', put: false }"
                             :clone="AddControlItem"
                             :move="OnMoveControlItem"
                             item-key="type"
                  >
                    <template #item="{ element }">
                      <div class="panel-item">
                        {{ element.name }}
                      </div>
                    </template>
                  </draggable>
                </div>
              </div>
              <div style="margin-right: 2px"> ></div>
            </div>
          </div>
        </template>
      </draggable>
    </div>
  </div>

</template>

<script setup lang="ts">

import {ControlContions, ControlItems, Controls, IControl} from "../model/IControl.ts";
import {IRule, IRuleItem, RuleEnum} from "../model/IRule.ts";
import {ref} from "vue";
import {nanoid} from 'nanoid'


const RecycleInit = {type: RuleEnum.recycle, name: "回收站"};
const Recycles = ref([RecycleInit])
const AddControl = (ctrl: IControl) => {
  let rule = {
    id: nanoid(),
    type: ctrl.type,
    component: ctrl.component,
    children: [],
    childrenIf: [],
    childrenThen: [],
    childrenElse: [],
    value: "",
    dsName: "",
    dsField: ""
  } as IRule
  return rule;
}

const AddControlItem = (ctrl: IControl) => {
  let ruleItem = {
    id: nanoid(),
    type: ctrl.type,
    component: ctrl.component,
    children: [],
    childrenIf: [],
    childrenThen: [],
    childrenElse: []
  } as IRuleItem
  return ruleItem;
}

function OnMoveControlItem() {
  return true;
}

function OnMoveControl() {
  return true;
}


const RecycleEnd = () => {
  //console.log("添加结束")
  Recycles.value = [RecycleInit]
}

//显示的Div
const dispalyIndex = ref([] as boolean[])
const ShowIndex = (index: number) => {
  if (dispalyIndex.value[index]) {
    return true;
  } else {
    return false;
  }
}

const SetIndex = (index: number) => {
  if (dispalyIndex.value[index]) {
    dispalyIndex.value[index] = false;
  } else {
    dispalyIndex.value[index] = true;
  }
}
</script>


<style scoped lang="scss">

.panel {
  border-width: thin;
  border-style: solid;
  border-color: #bdbdbd;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
}

.floatDiv {
  position: absolute;
  display: block;
  left: 167px;
  top: 380px;
  width: 100px;
  border-color: #bdbdbd;
  border-radius: 5px;

}
</style>
