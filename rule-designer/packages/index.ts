// @ts-ignore
import RuleReturn from "./components/rule-return.vue";
// @ts-ignore
import RuleVar from "./components/rule-var.vue";
// @ts-ignore
import RuleJudge from "./components/rule-judge.vue";

// @ts-ignore
import CondtionItem from "./components/condition/condtion-item.vue";
// @ts-ignore
import CondtionGroupAnd from "./components/condition/condtion-group-and.vue";
// @ts-ignore
import CondtionGroupOr from "./components/condition/condtion-group-or.vue";

import ItemConstChar from "./components/item/item-const-char.vue";
import ItemConstNumber from "./components/item/item-const-number.vue";

import ItemFunc from "./components/item/item-func.vue";
import ItemOperator from "./components/item/item-operator.vue";
import ItemDecider from "./components/item/item-decider.vue";
import ItemDs from "./components/item/item-ds.vue";
import ItemVar from "./components/item/item-var.vue";

// @ts-ignore
import {pascal} from 'naming-style';
import draggable from "vuedraggable";


import DragFlag from "./other/drag-flag.vue";

const components = [
    RuleReturn,
    RuleVar,
    RuleJudge,
    CondtionItem,
    CondtionGroupAnd,
    CondtionGroupOr,
    ItemFunc,
    ItemOperator,
    ItemDecider,
    ItemDs,
    ItemVar,
    ItemConstChar,
    ItemConstNumber
];

import type {App} from 'vue';

const install = (app: App) => {

    components.forEach((component) => {
        // 实际代码中使用的组件名
        if (component.__name) {
            app.component(pascal(component.__name), component);
        } else {
            if (component.__file) {
                let filenames = component.__file.split("/")
                let name = filenames[filenames.length - 1].replace(".vue", "");
                app.component(pascal(name), component);
            }
        }
    })

    app.component("draggable", draggable);
    app.component("DragFlag", DragFlag);
}
// 用于后面app.use调用
export default {install}
