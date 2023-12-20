import { defineStore } from "pinia";

interface IState {
    loadingShow: boolean //全局加载
}

const commonStore = defineStore('common',()=>{
    const state = reactive<IState>({
        loadingShow: false
    })
    
    return {
        ...toRefs(state)
    }
    
})
export default commonStore