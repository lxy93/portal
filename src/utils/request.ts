// 引入了nuxt/app模块中的UseFetchOptions类型,UseFetchOptions类型是一个用于配置请求选项的接口或类型
// import { UseFetchOptions } from "nuxt/app";

// //  HTTP 请求的方法
// type Methods = "GET" | "POST" | "DELETE" | "PUT";

// // URL 基地址
// const BASE_URL = "";

// // 请求结果数据格式
// export interface IResultData<T> {
//     code: number;
//     data: T;
//     msg: string;
// }

// /**
//  * api请求封装，使用useFetch函数
//  * @param { String } url 请求地址
//  * @param { String } method 请求方法
//  * @param { Object } data 请求数据
//  * @param { UseFetchOptions } options 请求选项
//  */

// /**
//  * options常用参数说明
//  * @param { boolean } lazy    是否在加载路由后才请求该异步方法，默认为false
//  * @param { boolean } server  是否在服务端请求数据，默认为true
//  */
// class HttpRequest {
//     request<T = any>(url: string, method: Methods, data: any, options?: UseFetchOptions<T>) {
//         return new Promise((resolve, reject) => {
//             // 继承UseFetchOptions类型，包含了baseURL和method两个属性
//             const newOptions: UseFetchOptions<T> = {
//                 baseURL: BASE_URL,
//                 method,
//                 ...options,
//             };

//             // 根据请求方法处理请求的数据
//             if (method === "GET" || method === "DELETE") {
//                 // 将数据设置为newOptions的params属性
//                 newOptions.params = data;
//             }
//             if (method === "POST" || method === "PUT") {
//                 // 将数据设置为newOptions的body属性
//                 newOptions.body = data;
//             }

//             // 发送请求
//             useFetch(url, newOptions)
//                 .then((res) => {
//                     resolve(res.data.value);
//                 })
//                 .catch((error) => {
//                     reject(error);
//                 });
//         });
//     }

//     // 封装常用方法
//     get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
//         return this.request(url, "GET", params, options);
//     }

   
//     post<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
//         return this.request(url, "POST", data, options);
//     }

   
//     Put<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
//         return this.request(url, "PUT", data, options);
//     }

    
//     Delete<T = any>(url: string, params: any, options?: UseFetchOptions<T>) {
//         return this.request(url, "DELETE", params, options);
//     }
// }

// const httpRequest = new HttpRequest();

// export default httpRequest;



import type { UseFetchOptions } from 'nuxt/app';

type Methods = "GET" | "POST" | "DELETE" | "PUT";

interface IResultData {
    ret: any,
    code: number,
    msg: string
}

// 产生一个随机的uuid
const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-mixed-operators
        var r = (Math.random() * 16) | 0,
        // eslint-disable-next-line no-mixed-operators
        v = c == 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}
/**
 * 
 * @param url 请求地址
 * @param params 参数
 * @param method 请求方式
 * @param opts 配置项
 * @returns 
 */
const request = (url: string, params?: any, method?: Methods, opts?: UseFetchOptions<any>)=> {
    // URL 基地址
    const BASE_URL = '/portal_api/api/portal/m/';
    method = method ?? 'GET'
    let newOptions: UseFetchOptions<any> = {
        ...opts,
        method,
        key: uuid()
    }
    if(method === 'GET'){
        newOptions.params = params
    }
    if(method === 'POST') {
        newOptions.body = params
    }
    return new Promise<void>(async (resolve, reject) => {
        let commonStore = useStore.commonStore()
        commonStore.loadingShow = true
        console.log(commonStore.loadingShow,999,`${BASE_URL}${url}`)
        await nextTick()
        useFetch(`${BASE_URL}${url}`,newOptions).then((response)=> {
            console.log(response,'888')
            const { data, error } = response
            if (error?.value) {
                const errorCode = JSON.stringify(error.value.statusCode)
                const errorMessage = JSON.stringify(error.value.statusMessage)
                showToast(errorCode+errorMessage)
                commonStore.loadingShow = false
                reject(error.value)
                return
            }
            if (newOptions.responseType === 'blob') {
                resolve(response.data.value)
                commonStore.loadingShow = false
                return
            }
            const res = data.value as IResultData
            if (res?.code === 200) {
                resolve(res.ret)
                commonStore.loadingShow = false
            }else {
                reject(res?.msg)
                commonStore.loadingShow = false
            }
        }).catch((error) => {
            reject(error)
            commonStore.loadingShow = false
        })
    })

}
export default request