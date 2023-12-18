# 规则设计器

## 1、应用场景

目前市场上主要的规则引擎中都可以动态解析脚本语言，比如javascript,drools,aviator。这些语言解析在业务上可以两种方式，一种是开发人员直接把相应的脚本写好，跟随程序一起交付； 第二种就是现场的人员可以动态编写语言；两种都可以实现，各有不同的优缺点。



麻雀规则设计器主要用于第二种的情况下，直接编写语言对运维人员的要求比较高。那能不能把语言设计成界面的拖拉方式来实现，市面上有不少这类的产品，麻雀设计器也在在参考各种产品之后，研发的一款可视化表达式设计器。

## 2、主要功能

设计器本身的产出物并不是具体的某种语言脚本，只是一个JSON格式的数据。具体的解析由各种不同的解析器来实现。目前麻雀已经实现在js,Aviator的解析。

设计器中包含了 变量、判断、返回、条件、条件组、常数、数据集、函数、运算符、判断符等组件。

其实数据集和函数需要调用方自行传入。

数据集就是一系列数据的集合，比如是业务数据，或者是配置数据等。

函数根据不同的解析器不同，函数也不同，比如，如果用js来实现表达式的解析，则函数则要传递为js的函数。如果是aviator，则要传递aviator的函数。

## 3、安装

```shell
npm i maque-rule-designer
```

**在main.ts中加载组件**

```typescript
import RuleDesigner from "maque-rule-designer"
import {createPinia} from "pinia";

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)

// @ts-ignore
app.use(RuleDesigner)
```



其中Vue3,ElementPlus和Pinia是必须要的。

**页面中使用**

```vue
 <rule-designer-layout ref="refDesigner"></rule-designer-layout>
```

给设计器赋于数据集和函数

```typescript
  refDesigner.value.SetDsData(dataset);
  refDesigner.value.SetFunc(funcs);
```

**赋值：**

```typescript
import simple from "./json/simple.json"
const refDesigner = ref();
refDesigner.value.loadData(simple);
```



其中的数据内容为：

https://github.com/4color/maque-rule/blob/main/example/rule-demo-ts/src/json/simple.json

**取得JSON数据:**

```typescript
const refDesigner = ref();
const data = refDesigner.value.getData()._rawValue
```



更多的内容请参考Demo

## 4、样例

[Rule-demo-ts](https://github.com/4color/maque-rule/tree/main/example/rule-demo-ts)

## 5、DEMO

https://4color.github.io/maque-rule/rule-demo-ts/