import { defineStore } from "pinia";

interface IState {
    name: string,
    code: number
}

import piniaPersistConfig from '../../../persist'
const metaStore = defineStore('meta',()=>{
    const state = reactive<IState>({
        name: '51家庭管家',
        code: 1
    })
    return {
        ...toRefs(state)
    }
    
},{
    persist: piniaPersistConfig('meta',['name'])
    
})
export default metaStore