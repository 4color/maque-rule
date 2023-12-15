package cloud.maque.rule.parser.annotations;


import cloud.maque.rule.parser.enums.RuleComponent;
import org.springframework.stereotype.Indexed;

import java.lang.annotation.*;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Indexed
public @interface AnnRule {

    /**
     * 注解名称
     *
     * @return
     */
    RuleComponent RuleType();
}
