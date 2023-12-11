import {ControlItemEnum, RuleEnum} from "./IRule";

export interface IControl {
    type: string,
    name: string,
    component: string,
    group?: boolean,//是否是分组
}

export const Controls = [
    {type: RuleEnum.var, name: "变量", component: "RuleVar"},
    {type: RuleEnum.judge, name: "判断", component: "RuleJudge"},
    {type: RuleEnum.return, name: "返回", component: "RuleReturn"}
] as IControl[]

export const ControlContions = [
    {type: RuleEnum.condition, name: "条件", component: "CondtionItem"},
    {type: RuleEnum.conditionGroupAnd, name: "条件组(AND)", component: "CondtionGroupAnd"},
    {type: RuleEnum.conditionGroupOr, name: "条件组(OR)", component: "CondtionGroupOr"}
] as IControl[]

export const ControlItems = [
    {
        type: ControlItemEnum.const, name: "常数", component: "ItemConst", group: true, children: [
            {
                type: ControlItemEnum.constVarchar, name: "字符串", component: "ItemConstChar"
            },
            {
                type: ControlItemEnum.constNumber, name: "数字", component: "ItemConstNumber"
            }
        ]
    },
    {type: ControlItemEnum.dataset, name: "数据集", component: "ItemDs"},
    {type: ControlItemEnum.getvar, name: "变量名", component: "ItemVar"},
    {type: ControlItemEnum.func, name: "函数", component: "ItemFunc"},
    {type: ControlItemEnum.operator, name: "运算符", component: "ItemOperator"},
    {type: ControlItemEnum.decider, name: "判断符", component: "ItemDecider"}
] as IControl[]
