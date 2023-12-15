# 麻雀规则的TypeScript的解析器

## 1、NPM使用

**安装**

```shell
npm install rule-parser-ts
```

**使用**

```js
import {Parser} from 'rule-parser/rule-parser.js'
import simple from "./json/simple.json"

let dsData = {gdxm: {id: 2}} as any
let result = Parser(simple, dsData)
console.log(result);
```

## 2、在Node中调用

```js
const myModule = require('dist/rule-parser.umd.cjs'); 
myModule.Parser(data)
```

## 3、JS引用

```js
<script src="./dist/rule-parser.umd.cjs"></script>
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