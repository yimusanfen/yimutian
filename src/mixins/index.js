export let mixin = {
    data(){
        return{
            showShare: false,
            options: [
                [
                    { name: '微信', icon: 'wechat' },
                    { name: '微博', icon: 'weibo' },
                    { name: 'QQ', icon: 'qq' },
                ],
                [
                    { name: '复制链接', icon: 'link' },
                    { name: '分享海报', icon: 'poster' },
                    { name: '二维码', icon: 'qrcode' },
                ],
            ],
        }
    },
    methods: {
        change(value){
            this.showShare = value;
        },
        fu(val){
            this.showShare = val
        }
    },
}