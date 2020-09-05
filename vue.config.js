module.exports ={ 
    //配置解析别名
    configureWebpack:{
        resolve:{
            alias:{
                //"别名":"对应的文件夹"
                "&c":"@/components",
                "&a":"@/api",
                "&v":"@/views",
                "&s":"@/store",
                "&m":"@mock",
                "#Y":"@/components/yaocai"
            }
        }
    },
    //自动开启和端口配置
    devServer:{
        open:true,//自动开启
        port:8888,//端口，默认3000
        host:"127.0.0.1",
        hotOnly:true,//热更新
        //跨域配置
        // proxy:{
        //     '/api':{
        //         target:'http://localhost:8888',//对应自己的接口
        //         changeOrigin:true,
        //         ws:true,
        //         pathRewrite:{
        //             '^/api':''
        //         }
        //     }
        // }
    }
}