package cloud.maque.rule.parser.expr;

import cloud.maque.rule.parser.annotations.AnnRule;
import cloud.maque.rule.parser.enums.RuleComponent;
import cloud.maque.rule.parser.holder.ExprParserHolder;
import cloud.maque.rule.parser.model.Rule;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Map;

@Component
@AnnRule(RuleType = RuleComponent.conditionGroupOr)
public class ConditionGroupOrExprParser extends AbstractExprParser {


    @Resource
    ExprParserHolder parserHolder;

    @Override
    public String GetExpr(Rule data, Map<String, Object> dsData) {

        String expr = "";
        Integer index = 0;
        for (Rule child : data.getChildren()) {
            switch (child.getType()) {
                case condition:
                case conditionGroupOr:
                case conditionGroupAnd:
                    expr += "(" + parserHolder.GetExpr(child, dsData) + ")";
                    break;

            }

            if (index < data.getChildren().length - 1) {
                expr += "||";
            }

            index++;
        }
        return expr;
    }
}
