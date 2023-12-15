package cloud.maque.rule.parser.holder;

import cloud.maque.rule.parser.expr.ExprParser;
import cloud.maque.rule.parser.model.Rule;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class ExprParserHolder<T> extends AbstractExprParserHolder<ExprParser> {

    public String GetExpr(Rule rule, Map<String, Object> dsData) {
        ExprParser exprParser = this.getProcessor(ExprParser.class, rule.getType());
        if (exprParser != null) {
            return exprParser.GetExpr(rule, dsData);
        } else {
            System.out.println("没找到对应的组件：" + rule.getType());
        }
        return null;
    }
}
