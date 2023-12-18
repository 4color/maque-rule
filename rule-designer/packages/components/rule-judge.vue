<template>
  <div style="display: flex">
    <drag-flag></drag-flag>
    <!-- 样式-->
    <div style="display: block">
      <!--横线-->
      <div class="group-line group-line-top"></div>

      <div class="group-box">
        <div class="group-line-shu group-line-shut-top">
          <div class="group-text">
            如果
          </div>
        </div>

        <div class="group-line-shu group-line-shut-mid">
          <div class="group-text">
            则
          </div>
        </div>

        <div class="group-line-shu group-line-shut-bottom">
          <div class="group-text">
            否则
          </div>
        </div>
      </div>
      <!--横线-->
      <div class="group-line group-line-bottom"></div>
    </div>

    <!-- 组件-->
    <div>
      <div class="rule-back">
        <rule-judge-if :data="props.data.childrenIf"></rule-judge-if>
      </div>
      <div class="rule-back">
        <rule-judge-then :data="props.data.childrenThen"></rule-judge-then>
      </div>
      <div class="rule-back">
        <rule-judge-else :data="props.data.childrenElse"></rule-judge-else>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import RuleJudgeIf from "./judge/rule-judge-if.vue";
import RuleJudgeThen from "./judge/rule-judge-then.vue";
import RuleJudgeElse from "./judge/rule-judge-else.vue";
import {defineProps} from "vue";
import {IRule, RuleEnum} from "../model/IRule";

const props = defineProps({
  data: {
    type: Object,
    default: {
      childrenIf: [],
      childrenThen: [],
      childrenElse: [],
      id: "",
      type: RuleEnum.judge,
      value: "",
      children: []
    } as IRule
  }
})


</script>


<style scoped lang="scss">
@import "../css/rule.scss";

.rule-edit {
  display: flex;
}

.el-input {
  width: 100px;
}

.rule-title-judge {

}


.group-line {
  margin-left: 12px;
  background-color: #5bb06f;
  width: 15px;
  height: 2px;
}

.group-line-top {
  margin-top: 10px;
}

.group-line-mid {
  margin-bottom: calc(50% - 10px);
}

.group-line-bottom {
  margin-bottom: 10px;
}

.group-box {
  height: calc(100% - 30px) !important;
}

.group-text {
  background-color: #00C234;
  width: 30px;
  border-radius: 3px;
  font-size: 10px;
  text-align: center;
  color: white;
  margin-left: -12px;
  display: block;
}

.group-line-shu {
  display: grid;
  margin-left: 12px;
  background-color: #5bb06f;
  width: 2px;
  align-items: center;
}

.group-line-shut-top {
  height: 50% !important;
}

.group-line-shut-bottom {
  height: calc(50% - 13px) !important;
}


</style>
