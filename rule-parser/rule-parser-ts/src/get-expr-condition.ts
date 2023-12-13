import {ControlItemEnum, IRule} from "../../../rule-designer/packages/model/IRule.ts";
import {GetDataSetFieldExpr} from "./get-expr-ds-field.ts";
import {GetFuncExpr} from "./get-expr-func.ts";

/**
 * 条件的处理
 * @constructor
 */
export function GetCondtionExpr(ruleCondition: IRule, dsData: Object): string {

    let expr: string = "";

    //IF的逻辑
    // @ts-ignore
    for (const index in ruleCondition.children) {
        // @ts-ignore
        let rule: IRule = ruleCondition.children[index] as IRule
        switch (rule.type) {
            case ControlItemEnum.getvar:
                expr += rule.value;
                break;
            case ControlItemEnum.decider:
                expr += rule.value;
                break;
            case ControlItemEnum.constVarchar:
                expr += `'${rule.value}'`;
                break;
            case ControlItemEnum.constNumber:
                expr += rule.value;
                break;
            case ControlItemEnum.dsField:
                expr += GetDataSetFieldExpr(rule, dsData);
                break;
            case ControlItemEnum.func:
                expr += GetFuncExpr(rule, dsData);
                break;
            case ControlItemEnum.empty:
                expr += "null"
                break

        }

    }

    return expr;
}