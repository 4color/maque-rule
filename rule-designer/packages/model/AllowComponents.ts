import {ControlItemEnum, RuleEnum} from "./IRule";

/**
 * 允许添加加到根上的组件
 */
export const RootComps = [RuleEnum.var, RuleEnum.judge, RuleEnum.return];

/**
 * 判断的 if
 */
export const JudgeIfComps = [
    RuleEnum.condition,
    RuleEnum.conditionGroupAnd,
    RuleEnum.conditionGroupOr,
    RuleEnum.var,
    RuleEnum.judge
];


/**
 * 判断的 else
 */
export const JudgeElseComps = [
    RuleEnum.condition,
    RuleEnum.conditionGroupAnd,
    RuleEnum.conditionGroupOr,
    RuleEnum.var,
    RuleEnum.judge,
    RuleEnum.return
];

/**
 * 条件的允许组件
 */
export const ConditionComps = [
    ControlItemEnum.constVarchar,
    ControlItemEnum.constNumber,
    ControlItemEnum.dsField,
    ControlItemEnum.func,
    ControlItemEnum.operator,
    ControlItemEnum.decider,
    ControlItemEnum.getvar,
    ControlItemEnum.empty
];

/**
 * 组下面的组件
 */
export const GroupsComps = [
    RuleEnum.condition,
    RuleEnum.conditionGroupAnd,
    RuleEnum.conditionGroupOr,
];


/**
 * 函数允许的组件
 */
export const FuncComps = [
    ControlItemEnum.constVarchar,
    ControlItemEnum.constNumber,
    ControlItemEnum.dataset,
    ControlItemEnum.dsField,
    ControlItemEnum.getvar
];

