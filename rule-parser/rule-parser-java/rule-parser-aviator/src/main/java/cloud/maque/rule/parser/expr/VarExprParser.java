package cloud.maque.rule.parser.expr;

import cloud.maque.rule.parser.annotations.AnnRule;
import cloud.maque.rule.parser.enums.RuleComponent;
import cloud.maque.rule.parser.model.Rule;
import org.springframework.stereotype.Component;

import java.text.MessageFormat;
import java.util.Map;

@Component
@AnnRule(RuleType = RuleComponent.var)
public class VarExprParser extends AbstractExprParser {

    @Override
    public String GetExpr(Rule data, Map<String, Object> dsData) {

        String expr = "";
        for (Rule child : data.getChildren()) {
            switch (child.getType()) {
                case constVarchar:
                    expr += MessageFormat.format("''{0}''", child.getValue());
                    break;
                case constNumber:
                    expr += MessageFormat.format("{0}", child.getValue());
                    break;
                case dataset:
                    expr += MessageFormat.format("{0}", child.getValue());
                    break;
                case dsField:
                    expr += MessageFormat.format("{0}", child.getValue());
                    break;
                case operator:
                    expr += MessageFormat.format("{0}", child.getValue());
                    break;
                case decider:
                    expr += MessageFormat.format("{0}", child.getValue());
                    break;
                case getvar:
                    expr += MessageFormat.format("{0}", child.getValue());
                    break;
                case empty:
                    expr += "nil";
                    break;
            }
        }
        return expr;
    }
}
