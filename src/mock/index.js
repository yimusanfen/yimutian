let Mock =require("mockjs");
<<<<<<< HEAD
Mock.mock("res/index/sales","get",require("./json/kyw/resindex.json"));
Mock.mock("res/index/topcon/liebiao","get",require("./json/kyw/list.json"));
Mock.mock("/res/details/eval","get",require("./json/kyw/merchant.json"))

Mock.mock("/home/listdata","get",require("./json/listdata.json"))
// Mock.mock("res/index/sales","get",()=>{
//     return indexdata
// });


//Mock返回official首页数据
// const indexdata =  Mock.mock({
//     "arr|6":[
//         {
//             id:"@increment(1)",
//             "smallimg|1":['images/restaurant/index/sales/sales1.jpg','images/restaurant/index/sales/sales2.jpg','images/restaurant/index/sales/sales3.jpg','images/restaurant/index/sales/sales4.jpg','images/restaurant/index/sales/sales5.jpg','images/restaurant/index/sales/sales6.jpg'],
//             "bigimg|1":['images/restaurant/index/sales/sales1.jpg','images/restaurant/index/sales/sales2.jpg','images/restaurant/index/sales/sales3.jpg','images/restaurant/index/sales/sales4.jpg','images/restaurant/index/sales/sales5.jpg','images/restaurant/index/sales/sales6.jpg'],
//             title:"@ctitle(8,15)",
//             "newprice|5-35":1,
//             "oldprice|20-62":1,
//             address:"@city(true)",
//             "views|5-25":1,
//             "orders|1-100":1,
//             "bargain|1-100":1 
//         }
//     ]
// })
// let Mock =require("mockjs");
// Mock.mock("/xiaoming","get",require("./json/ivdeoapi.json"));

Mock.mock("/xiaoming", "get", require("./json/hxhome.json"));
Mock.mock("/over/list","get",require("./json/fsy/list.json"));
Mock.mock("/zhuanqu/friuts","get",require("./json/fsy/friuts.json"));
Mock.mock("/tehui/discounts","get",require("./json/fsy/discounts.json"));

=======
// Mock.mock("/xiaoming","get",require("./json/ivdeoapi.json"));
Mock.mock("/yaocaiA/meiren","get",require("./json/yaocaiA.json"));
>>>>>>> 2f6ab0eda520238e48f69772e2e21670f38b5beb
