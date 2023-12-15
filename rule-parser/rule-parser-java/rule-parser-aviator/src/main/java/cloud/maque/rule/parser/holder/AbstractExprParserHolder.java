package cloud.maque.rule.parser.holder;

import cloud.maque.rule.parser.annotations.AnnRule;
import cloud.maque.rule.parser.enums.RuleComponent;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public abstract class AbstractExprParserHolder<T> implements ApplicationContextAware {

    private ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }

    /**
     * 根据注解找到具体的类
     *
     * @param c
     * @return
     */
    protected T getProcessor(Class<T> c, RuleComponent type) {
        Map<String, T> processorMap = applicationContext.getBeansOfType(c);

        List<T> allList = processorMap.values().stream().collect(Collectors.toList());
        for (Integer i = 0; i < allList.size(); i++) {
            AnnRule dataIndex = allList.get(i).getClass().getAnnotation(AnnRule.class);
            if (dataIndex != null && dataIndex.RuleType().name().equalsIgnoreCase(type.name())) {
                return allList.get(i);
            }
        }
        return null;
    }
}
