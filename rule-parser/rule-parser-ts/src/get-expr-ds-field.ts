import {IRule} from "../../../rule-designer/packages/model/IRule.ts";

/**
 * 数据集的处理
 * @constructor
 */
export function GetDataSetFieldExpr(rule: IRule, dsData: Object): string {

    let expr: string = "";

    // @ts-ignore
    if (rule.dsName && dsData[rule.dsName] != undefined) {
        // @ts-ignore
        let ds = dsData[rule.dsName];
        if (typeof ds == "object") {

        } else {
            expr = ds[rule.dsField];
        }

    }

    return expr;
}