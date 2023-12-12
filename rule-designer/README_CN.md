# 麻雀规则设计器

用拖拉拽的方式生成规则元数据。

## 安装

`npm i maque-rule-designer`

## 说明

包含了 变量、判断、返回、条件、条件组、常数、数据集、函数、运算符、判断符等组件

## 元数据格式

```json
[
    {
        "id": "ENWOBpRtxiQhh_Yv6NdBx",
        "type": "类型",
        "component": "RuleVar",
        "children": "子节点",
        "childrenIf": "条件IF的子节点",
        "childrenElse": "条件Eles的子节点",
        "value": "具体的值",
        "dsName": "数据集的名称",
        "dsField": "数据集的字段"
    }
]
```

### Type 的内容

```typescript
export enum RuleEnum {
    var = "var", //设置变量
    judge = "judge", //判断,
    condition = "condition",//条件
    conditionGroupAnd = "conditionGroupAnd",//条件组（AND)
    conditionGroupOr = "conditionGroupOr",//条件(OR)
    return = "return"//返回
}

export enum ControlItemEnum {
    const = "const", //常数
    constVarchar = "constVarchar", //字符串
    constNumber = "constNumber", //数字
    dataset = "dataset", //数据集,
    func = "func",//函数
    decider = "decider",//判断符
    getvar = "getvar",//变量名
    operator = "operator",//运算符
}
```

