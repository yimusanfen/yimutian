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
                "&m":"@/mock",
                "&u":"@/utils",
                "&mi":"@/mixins"
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
    },
    // 移动端适配rem
    css:{
        loaderOptions:{
          css:{},
          postcss:{
            plugins:[
              require('postcss-px2rem')({
                //适配375屏幕，设计图750中量出来的尺寸要/2
                //配置成37.5是为了兼容没有适配rem布局的第三方ui库
                remUnit:37.5
              })
            ]
          }
        }
      }
}