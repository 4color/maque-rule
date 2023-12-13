import {ref} from 'vue'
import {defineStore} from 'pinia'

export const varStore = defineStore('var', () => {
    const vars = ref([] as string[])

    function SetVars(data: string[]) {
        vars.value = data;
    }

    function Remove(varName: string) {
        let index = vars.value.findIndex(function (item: string) {
            return item == varName;
        });

        if (index > -1) {
            vars.value.splice(index, 1);
        }

    }

    function InsertVar(varName: string) {
        if (!vars.value.find(function (item: string) {
            return item == varName;
        })) {
            vars.value.push(varName)
        }
    }

    return {vars, SetVars, Remove, InsertVar}
})

