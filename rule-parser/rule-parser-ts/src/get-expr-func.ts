import {ControlItemEnum, IRule} from "../../../rule-designer/packages/model/IRule.ts";
import {GetDataSetFieldExpr} from "./get-expr-ds-field.ts";

/**
 * 函数的处理
 * @constructor
 */
export function GetFuncExpr(rule: IRule, dsData: Object): string {

    let expr: string = `${rule.value}(`;

    if (rule.children && rule.children.length > 0) {

        for (let i = 0; i < rule.children?.length; i++) {
            let subRule: IRule = rule.children[i] as IRule
            switch (subRule.type) {
                case ControlItemEnum.constVarchar:
                    expr += `"${subRule.value}"`;
                    break;
                case ControlItemEnum.constNumber:
                    expr += subRule.value;
                    break;
                case ControlItemEnum.dsField:
                    expr += GetDataSetFieldExpr(subRule, dsData);
                    break;
            }

            if (i < rule.children.length - 1) {
                expr += ",";
            }
        }
    }

    expr += ")";

    return expr;
}