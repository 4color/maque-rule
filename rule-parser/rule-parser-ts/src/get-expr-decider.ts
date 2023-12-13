import {IRule} from "../../../rule-designer/packages/model/IRule.ts";

export function GetExprDecider(rule: IRule): string {
    return rule.value;
}