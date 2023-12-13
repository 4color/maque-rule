/**
 * 整个规则的结构
 */
export interface IRule {
    id: string,
    type: RuleEnum
    value: any,
    children?: IRule[],
    childrenIf?: IRule[],
    childrenElse?: IRule[],
    dsName?: string,
    dsField?: string,

}

export interface IRuleItem {
    type: RuleEnum
}

/**
 * 判断
 */
export interface IRuleJudge {

}

/**
 * 变量
 */
export interface IRuleVar {

}

/**
 * 规则类型
 */
export enum RuleEnum {
    var = "var", //设置变量
    judge = "judge", //判断,
    condition = "condition",//条件
    conditionGroupAnd = "conditionGroupAnd",//条件组（AND)
    conditionGroupOr = "conditionGroupOr",//条件(OR)
    return = "return",//返回
    recycle = "recycle",//回收站
}

export enum ControlItemEnum {
    const = "const", //常数
    constVarchar = "constVarchar", //字符串
    constNumber = "constNumber", //数字
    dataset = "dataset", //数据集,
    dsField = "dsField", //数据集字段,
    func = "func",//函数
    decider = "decider",//判断符
    getvar = "getvar",//变量名
    operator = "operator",//运算符
    empty = "empty",//空值
}
