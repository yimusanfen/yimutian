let Mock =require("mockjs");

Mock.mock("/fsdata","get",require("./data/fsdata.json"));
Mock.mock("/jypjdata","get",require("./data/jypjdata.json"));

