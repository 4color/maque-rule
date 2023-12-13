import './style.css'
import {RuleParser} from './rule-parser-ts.ts'
import simple from "./json/simple.json"

let dsData = {gdxm: {id: 2}} as any
let result = RuleParser(simple, dsData)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = "执行结果：" + result


