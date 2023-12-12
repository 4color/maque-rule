# MAQUE-RULE-DESIGNER

Generate rule metadata through drag and drop

[[中文](README_CN.md)]

![rule](rule.png)

## Install

`npm i maque-rule-designer`

## Illustrate

Contains components such as variables, judgments, returns, conditions, condition groups, constants, datasets, functions, operators, and evaluators

## Metadata Format

```json
[
    {
        "id": "id",
        "type": "",
        "component": "RuleVar",
        "children": "",
        "childrenIf": "",
        "childrenElse": "",
        "value": "",
        "dsName": "DataSet's name",
        "dsField": "DataSet's file name"
    }
]
```

### Type 

```typescript
export enum RuleEnum {
    var = "var", 
    judge = "judge", 
    condition = "condition",
    conditionGroupAnd = "conditionGroupAnd",
    conditionGroupOr = "conditionGroupOr",
    return = "return"
}

export enum ControlItemEnum {
    const = "const",
    constVarchar = "constVarchar", 
    constNumber = "constNumber", 
    dataset = "dataset",
    func = "function",
    decider = "decider",
    getvar = "getvar",
    operator = "operator",
}
```

