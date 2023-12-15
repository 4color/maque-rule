import {ControlItemEnum, IRule, RuleEnum} from "../../../rule-designer/packages/model/IRule.ts";
import {GetFuncExpr} from "./get-expr-func.ts";
import {GetCondtionExpr} from "./get-expr-condition.ts";
import {GetCondtionAndExpr} from "./get-expr-condtition-group-and.ts";
import {GetCondtionOrExpr} from "./get-expr-condtition-group-or.ts";

/**
 * 判断的处理
 * @constructor
 */
export function GetJudgeExpr(ruleJudge: IRule, dsData: Object): string {

    let expr: string = "";
    let exprIf: string = "";
    let exprIfReturn: string = "";
    let exprElse: string = ""
    let exprElseReturn: string = ""


    //IF的逻辑
    // @ts-ignore
    for (const index in ruleJudge.childrenIf) {
        // @ts-ignore
        let rule: IRule = ruleJudge.childrenIf[index] as IRule
        switch (rule.type) {
            case RuleEnum.condition:
                exprIf += GetCondtionExpr(rule, dsData);
                break;
            case RuleEnum.conditionGroupAnd:
                exprIf += GetCondtionAndExpr(rule, dsData);
                break;
            case RuleEnum.conditionGroupOr:
                exprIf += GetCondtionOrExpr(rule, dsData);
                break;
            case RuleEnum.var:
                exprIf += GetFuncExpr(rule, dsData);
                break
            case RuleEnum.judge:
                exprIf += GetJudgeExpr(rule, dsData);
                break
            case ControlItemEnum.empty:
                exprIf += "null;"
                break
            case RuleEnum.return:
                exprIfReturn = "return " + rule.value;
                break

        }

    }

    //Else的逻辑
    // @ts-ignore
    for (const index in ruleJudge.childrenElse) {
        // @ts-ignore
        let rule: IRule = ruleJudge.childrenElse[index] as IRule
        switch (rule.type) {
            case RuleEnum.condition:
                exprElse += GetCondtionExpr(rule, dsData);
                break;
            case RuleEnum.conditionGroupAnd:
                exprElse += GetCondtionAndExpr(rule, dsData);
                break;
            case RuleEnum.conditionGroupOr:
                exprElse += GetCondtionOrExpr(rule, dsData);
                break;
            case RuleEnum.var:
                exprElse += GetFuncExpr(rule, dsData);
                break
            case RuleEnum.judge:
                exprElse += GetJudgeExpr(rule, dsData);
                break
            case RuleEnum.return:
                exprElseReturn = "return " + rule.value;
                break

        }

    }
    if (exprElse || exprElseReturn) {
        expr = `if (${exprIf}){
           ${exprIfReturn};
        } else {
           ${exprElse}
           ${exprElseReturn};
        }`
    } else {
        expr = `if (${exprIf}){
           ${exprIfReturn};
           } `
    }

    return expr;
}