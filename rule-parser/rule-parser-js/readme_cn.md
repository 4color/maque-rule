# 麻雀规则JS引用

## 1、JS引用

```js
<script src="https://unpkg.com/rule-parser@0.0.1/dist/rule-parser.umd.cjs"></script>
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