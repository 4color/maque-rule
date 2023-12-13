import {type IRule, RuleEnum} from "../../../rule-designer/packages/model/IRule";
import {GetVarExpr} from "./get-expr-var.ts";
import {GetJudgeExpr} from "./get-expr-judge.ts";

/**
 * 对JSON进行逻辑判断
 * @param dsData 数据集的数据对象
 * @constructor
 */
export function RuleParser(template: any, dsData: Object): Boolean {

    const evil = function (fn: string) {
        let Fn = Function;
        fn = `${fn}`
        return new Fn(fn)();
    }

    if (!template) {
        return false;
    }
    let data = [] as IRule[]
    if (typeof template == "string") {
        data = JSON.parse(template) as IRule[]
    } else {
        data = template as IRule[]
    }


    //表达式
    let expr: string = "";
    let returnExpre: string = "";

    // @ts-ignore
    for (const index: IRule in data) {
        // @ts-ignore
        let rule: IRule = data[index] as IRule
        switch (rule.type) {
            case RuleEnum.var:
                expr += GetVarExpr(rule, dsData);
                break;
            case RuleEnum.judge:
                expr += GetJudgeExpr(rule, dsData);
                break
            case RuleEnum.return:
                returnExpre = "return " + rule.value + ";"
                break
        }
    }
    //执行结果
    let result = false;

    if (expr || returnExpre) {
        console.log(expr + "\n" + returnExpre);
        result = evil(expr + "\n" + returnExpre);
    }

    //返回结果
    return result;


}

