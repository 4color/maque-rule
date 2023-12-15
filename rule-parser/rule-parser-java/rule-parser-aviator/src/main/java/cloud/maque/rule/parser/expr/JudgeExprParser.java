package cloud.maque.rule.parser.expr;

import cloud.maque.rule.parser.annotations.AnnRule;
import cloud.maque.rule.parser.enums.RuleComponent;
import cloud.maque.rule.parser.holder.ExprParserHolder;
import cloud.maque.rule.parser.model.Rule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import java.text.MessageFormat;
import java.util.Map;

@Component
@AnnRule(RuleType = RuleComponent.judge)
public class JudgeExprParser extends AbstractExprParser {


    @Resource
    ExprParserHolder parserHolder;

    @Override
    public String GetExpr(Rule data, Map<String, Object> dsData) {

        String expr = "";
        String exprIf = "";
        String exprIfReturn = "";
        String exprElse = "";
        String exprElseReturn = "";

        for (Rule child : data.getChildrenIf()) {
            if (child.getType() != null) {
                switch (child.getType()) {
                    case var:
                    case condition:
                    case conditionGroupAnd:
                    case conditionGroupOr:
                    case judge:
                        exprIf += parserHolder.GetExpr(child, dsData);
                        break;
                    case RETURN:
                        exprIfReturn = "return " + child.getValue() + ";";
                        break;
                    case empty:
                        exprIf += "nil";
                        break;
                }
            }
        }

        if (data.getChildrenEles() != null) {
            for (Rule child : data.getChildrenEles()) {
                if (child.getType() != null) {
                    switch (child.getType()) {
                        case var:
                        case condition:
                        case conditionGroupAnd:
                        case conditionGroupOr:
                        case judge:
                            exprElse += parserHolder.GetExpr(child, dsData);
                            break;
                        case RETURN:
                            exprElseReturn = "return " + child.getValue() + ";";
                            break;
                        case empty:
                            exprElse += "nil";
                            break;
                    }
                }
            }
        }

        if (StringUtils.hasText(exprElse) || StringUtils.hasText(exprElseReturn)) {
            expr = "if (" + exprIf + "){" + exprIfReturn + " } else { " + exprElse + "} " + exprElseReturn + "};}";
        } else {
            expr = "if (" + exprIf + "){" + exprIfReturn + "};";
        }

        return expr;
    }
}
