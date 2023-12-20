export default defineNuxtRouteMiddleware((to,from)=> {
    let nuxtApp = useNuxtApp()
    console.log(nuxtApp,'222',to,from)
    // const { $message } = nuxtApp;
    // $message.error('服务器异常，请稍后重试');
})