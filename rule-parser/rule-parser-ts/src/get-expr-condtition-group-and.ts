import {GetCondtionExpr} from "./get-expr-condition.ts";
import {IRule, RuleEnum} from "../../../rule-designer/packages/model/IRule.ts";
import {GetCondtionOrExpr} from "./get-expr-condtition-group-or.ts";

/**
 * 条件组且的处理
 * @constructor
 */
export function GetCondtionAndExpr(ruleCondition: IRule, dsData: Object): string {

    let expr: string = "";

    if (ruleCondition.children) {
        //IF的逻辑
        // @ts-ignore
        for (const index in ruleCondition.children) {
            // @ts-ignore
            let rule: IRule = ruleCondition.children[index] as IRule
            switch (rule.type) {
                case RuleEnum.condition:
                    expr += "(" + GetCondtionExpr(rule, dsData) + ")";
                    break;
                case RuleEnum.conditionGroupAnd:
                    expr += "(" + GetCondtionAndExpr(rule, dsData) + ")";
                    break;
                case RuleEnum.conditionGroupOr:
                    expr += "(" + GetCondtionOrExpr(rule, dsData) + ")";
                    break;

            }
            // @ts-ignore
            if (index < ruleCondition.children?.length - 1) {
                expr += '&&'
            }

        }
    }

    return expr;
}