let Mock =require("mockjs");
Mock.mock("res/index/sales","get",require("./json/kyw/resindex.json"));
Mock.mock("res/index/topcon/liebiao","get",require("./json/kyw/list.json"));
Mock.mock("/res/details/eval","get",require("./json/kyw/merchant.json"))
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