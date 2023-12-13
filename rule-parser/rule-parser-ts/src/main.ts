

import './style.css'
import {RuleParser} from './rule-parser-ts.ts'
import simple from "./json/simple.json"

let result = RuleParser(simple)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = "执行结果：" + result


