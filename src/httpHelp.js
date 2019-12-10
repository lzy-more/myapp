import axios from 'axios'
// import router from './router'
axios.defaults.baseURL='http://..............'//设置请求的基地址




//添加请求的拦截器
axios.interceptors.request.use((config)=>{
    //在发送请求之前携带token
    config.header.Authorization=this.$cookie.get('token')
    return config

},(error)=>{
    //请求错误
    return Promise.reject(error)
})


//添加响应的拦截器
axios.interceptors.response.use((response)=>{
    //操作响应数据
    if(response.data.status==400&&response.data.msg=='无效token'){
        this.$message.danger('滚,还想偷偷进来')
        this.$router.push({path:'login'})
    }
    return response
},(error)=>{
    //响应错误
    return Promise.reject(error)
})
export default{
    axios
}