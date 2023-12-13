import {ControlItemEnum, IRule} from "../../../rule-designer/packages/model/IRule.ts";
import {GetDataSetFieldExpr} from "./get-expr-ds-field.ts";
import {GetFuncExpr} from "./get-expr-func.ts";
import {GetExprDecider} from "./get-expr-decider.ts";

/**
 * 变量的处理
 * @constructor
 */
export function GetVarExpr(rule: IRule, dsData: Object): string {

    let expr: string = "";
    expr = `let ${rule.value}=`

    // @ts-ignore
    for (const index in rule.children) {
        // @ts-ignore
        let child: IRule = rule.children[index] as IRule
        switch (child.type) {
            case ControlItemEnum.constVarchar:
                expr += `'${child.value}'`;
                break;
            case ControlItemEnum.constNumber:
                expr += child.value;
                break;
            case ControlItemEnum.dsField:
                expr += GetDataSetFieldExpr(child, dsData);
                break;
            case ControlItemEnum.func:
                expr += GetFuncExpr(child, dsData);
                break;
            case ControlItemEnum.operator:
                expr += rule.value
                break;
            case ControlItemEnum.decider:
                expr += GetExprDecider(rule);
                break;
            case ControlItemEnum.getvar:
                expr += rule.value;
                break;
            case ControlItemEnum.empty:
                expr += 'null';
                break;

        }

    }

    expr += ";\n";
    return expr;
}