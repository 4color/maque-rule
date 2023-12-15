package cloud.maque.rule.parser.expr;

import cloud.maque.rule.parser.model.Rule;

import java.util.Map;

public interface ExprParser {

    String GetExpr(Rule data, Map<String, Object> dsData);
}
