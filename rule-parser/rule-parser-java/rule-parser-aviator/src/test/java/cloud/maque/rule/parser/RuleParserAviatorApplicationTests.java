package cloud.maque.rule.parser;

import cloud.maque.rule.parser.model.Rule;
import cloud.maque.rule.parser.service.RuleParser;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import net.minidev.json.JSONValue;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.ResourceUtils;

import javax.annotation.Resource;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class RuleParserAviatorApplicationTests {


    @Resource
    RuleParser ruleParser;

    @Test
    public void contextLoads() {


        List<Rule> rules = new ArrayList<>();
        try {
            File file = ResourceUtils.getFile("classpath:simple.json");
            BufferedReader reader = new BufferedReader(new FileReader(file));
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line).append("\n");
            }

            reader.close();

            rules = JSONObject.parseArray(sb.toString(), Rule.class);

        } catch (Exception ex) {

        }


        Boolean result = ruleParser.Parser(rules);
        System.out.println(result);

    }

}
