package cloud.maque.rule.parser.imp;

import cloud.maque.rule.parser.expr.VarExprParser;
import cloud.maque.rule.parser.holder.ExprParserHolder;
import cloud.maque.rule.parser.model.Rule;
import cloud.maque.rule.parser.service.RuleParser;
import com.googlecode.aviator.AviatorEvaluator;
import com.googlecode.aviator.Expression;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@Component
public class RuleParserImpl implements RuleParser {

    @Resource
    ExprParserHolder exprParserHolder;

    @Override
    public Boolean Parser(List<Rule> data, Map<String, Object> dsData) {

        if (data != null && data.size() > 0) {

            String expr = "";
            String exprReturn = "";
            for (int i = 0; i < data.size(); i++) {
                switch (data.get(i).getType()) {
                    case var:
                    case judge:
                        expr += exprParserHolder.GetExpr(data.get(i), dsData);
                        break;
                    case RETURN:
                        exprReturn = "return " + data.get(i).getValue() + ";";
                        break;
                }
            }
            if (StringUtils.hasText(expr) || StringUtils.hasText(exprReturn)) {
                expr = expr + "\n" + exprReturn;

                System.out.println(expr);

                Expression expression = AviatorEvaluator.compile(expr, true);
                Object execute = expression.execute(dsData);
                if (execute instanceof Boolean) {
                    return (Boolean) execute;
                } else {
                    //返回结果不是布尔值
                }

            }

        }


        return false;
    }

    @Override
    public Boolean Parser(List<Rule> data) {
        return Parser(data, null);
    }
}
