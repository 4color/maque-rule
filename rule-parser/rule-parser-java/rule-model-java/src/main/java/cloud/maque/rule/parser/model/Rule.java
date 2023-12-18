package cloud.maque.rule.parser.model;

import cloud.maque.rule.parser.enums.RuleComponent;
import lombok.Data;


@Data
public class Rule {

    String id;
    RuleComponent type;

    Object value;

    /**
     * 子节点
     */
    Rule[] children;

    /**
     * If的子节点
     */
    Rule[] childrenIf;

    /**
     * Then的子节点
     */
    Rule[] childrenThen;

    /**
     * ELes的子节点
     */
    Rule[] childrenEles;

    /**
     * 数据集的名称
     */
    String dsName;

    /**
     * 数据集对应的字段
     */
    String dsField;

}
