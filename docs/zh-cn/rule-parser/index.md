# 规则解析器

规则设计器的成果只是JSON数据，具体的规则执行则由不同的解析器来执行和编译。

目前市场上的规则引擎很多。但其实大部分都是表达式引擎，相当于对动态表达式进行编译和解析

Java语言的有：[Drools](https://github.com/kiegroup/drools)(业界有名)、Janino、QL、Mvel、Juel、Fel、[Aviator](https://github.com/killme2008/aviatorscript) 、URule

Python语言有：[rule-engine](https://zerosteiner.github.io/rule-engine/index.html)

Go语言有：[gengine](https://github.com/bilibili/gengine) (B站出品)、[rulego](https://github.com/rulego/rulego)

当然上述的产品中，有些不止表达式引擎这么简单，还包含了决策树、执行器等。

大家可以根据规则生成的器结果自行去翻译成对应规则引擎的脚本。



## 翻译和解析器

目前我这边已经完成了两个引擎：JS和Aviator的脚本执行器 。欢迎Pr其它语言的执行器，代码请推送到这个文件夹下[rule-parser](https://github.com/4color/maque-rule/tree/main/rule-parser)

### 1、TS/JS执行器

Js是前端的执行器，可以用于前端的各个规则判断，当然也可以放在NodeJs后端执行，改为require引入。

https://github.com/4color/maque-rule/tree/main/rule-parser/rule-parser-ts

**浏览器引用**

代码是用Ts编写，编译成了js类，所以js可以直接调用

```html

<script src="https://unpkg.com/rule-parser-ts/dist/rule-parser.umd.cjs"></script>
<!-- 引入jquery -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
    var module = window.RuleParser;
    var data =  $.parseJSON($.ajax({
        url: "src/json/simple.json",//json文件位置，文件名
        dataType: "json", //返回数据格式为json
        async: false
    }).responseText);
    document.write("测试结果：" + module.Parser(data))
</script>
```

**NPM包引入**

```shell
npm i rule-parser-ts
```

```typescript
import {Parser} from "rule-parser-ts/dist/rule-parser.js"
import simple from "./simple.json"

let dsData = {gdxm: {id: 2}} as any
let result = Parser(simple, dsData)
```



### 2、Aviator

**引入Maven坐标**

```xml
  <dependency>
      <groupId>cloud.maque.rule</groupId>
      <artifactId>rule-parser-aviator</artifactId>
      <version>0.0.1-SNAPSHOT</version>
  </dependency>
```

**调用**

[simple.json](https://github.com/4color/maque-rule/blob/main/rule-parser/rule-parser-java/rule-parser-aviator/src/test/resources/simple.json) 就是规则设计器的产出物

```java

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
```



上面没有传递数据集，如果要传入数据集，则调用重载参数即可。

一些自定义的函数，需要在初始化时载入，[这块内容请参考Aviator的函数部分](https://www.yuque.com/boyan-avfmj/aviatorscript/xbdgg2)