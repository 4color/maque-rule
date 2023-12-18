export interface Kv {
    label:string,
    value:any
}
export const IDataOperator = [
    {label:"加(+)",value:"+"},
    {label:"减(-)",value:"-"},
    {label:"乘(*)",value:"*"},
    {label:"除法(/)",value:"/"}
] as Kv[]


export const IDataDecider = [
    {label:"大于(>)",value:">"},
    {label:"大于等于(>=)",value:">="},
    {label:"小于(<)",value:"<"},
    {label:"小于等于(<=)",value:"<="},
    {label:"等于(==)",value:"=="},
    {label:"不等于(!=)",value:"!="}
] as Kv[]
