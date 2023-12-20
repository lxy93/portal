import request from '../utils/request'

type giveMeDataParams = {
    name: string
}

export const giveMeData = (params:giveMeDataParams)=> {
    return request('public/index/get',params)
}

export const giveMeData2 = (params:giveMeDataParams)=> {
    return request('public/index/post',params,'POST')
}