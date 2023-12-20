<template>
    <div>
        <!-- <p class="f32 color-999">{{ cc.name  }}</p>
        <p class="color-333">{{ cc.code }}</p> -->
        <van-button @click="btnClick" size="small" type="primary">主要按钮</van-button>
        <van-button @click="successClick" size="small" type="success">成功按钮</van-button>
        <van-button @click="getAllRoutes" size="small" type="default">默认按钮</van-button>
        <!-- <van-button @click="storeClick" size="small" type="warning">警告按钮</van-button> -->
        <van-button @click="wartClick" size="small" type="danger">危险按钮</van-button>
    </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue'
//@ts-ignore
import { giveMeData, giveMeData2 } from '/api/index'
let router = useRouter()
let route = useRoute()
// const cc = useStore.metaStore()
const init2 = async ()=> {
    await nextTick()
    // showToast('你好')
    giveMeData({name:'666'})
    // request('test/give_me_data_by_get',{name:'aaa'})
    // const data = useFetch('http://10.0.16.45/portal/web/test/get',{
    //     params: {
    //         ss:123
    //     }
    // })
    // console.log(data,'9363')
    
}
const btnClick = ()=> {
    giveMeData2({name:'520'})
}
const getAllRoutes = ()=> {
    console.log(router.getRoutes())
}
// const storeClick = ()=> {
//     cc.name = '51为想'
//     cc.code = 2

// }
const successClick = ()=> {
    navigateTo({
        path: '/user/detail',
        params: {
            title: '51保姆',
            code: 'wy'
        }
    })
}
const wartClick = ()=> {
    let code = 'wy'
    router.push({
        path: `/user/${code}`,
    })
}
onMounted(()=> {
    console.log('85200000')
    init2()
})
</script>

<style lang='less' scoped>
.f32{
    font-size: 32px;
}
.color-999{
    color: @them-color;
}

</style>