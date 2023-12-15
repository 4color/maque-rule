package cloud.maque.rule.parser.service;

import cloud.maque.rule.parser.model.Rule;

import java.util.List;
import java.util.Map;
import java.util.Objects;

public interface RuleParser {

    Boolean Parser(List<Rule> data, Map<String, Object> dsData);

    Boolean Parser(List<Rule> data);
}
