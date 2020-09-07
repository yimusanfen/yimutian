let Mock =require("mockjs");
Mock.mock("/over/list","get",require("./json/fsy/list.json"));
Mock.mock("/zhuanqu/friuts","get",require("./json/fsy/friuts.json"));
Mock.mock("/tehui/discounts","get",require("./json/fsy/discounts.json"));

