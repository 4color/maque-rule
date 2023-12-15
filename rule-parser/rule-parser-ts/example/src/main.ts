import './style.css'
// @ts-ignore
import {Parser} from "../../dist/rule-parser.js"
import simple from "./simple.json"

let dsData = {gdxm: {id: 2}} as any
let result = Parser(simple, dsData)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = "演示执行结果：" + result


