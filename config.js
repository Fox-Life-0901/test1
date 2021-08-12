// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "滑板仔",
        "i m ur 妹夫",
        "ah boi jiao wo",
        "Happy Birthday to you",
        "May you have a long life and be blessed always",
        "可是我要说",
        "哥，你是我亲哥！",
        "我要见见你妹妹"
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "滑板仔": "./imgs/1.png",
        "i m ur 妹夫": "./imgs/2.png",
        "ah boi jiao wo": "./imgs/1.png",
        "Happy Birthday to you": "./imgs/2.png",
        "May you have a long life and be blessed always": "./imgs/1.png",
        "可是我要说": "./imgs/2.png",
        "哥，你是我亲哥！": "./imgs/1.png",
        "我要见见你妹妹": "./imgs/2.png"
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "舞台",
        balloons_flying: "放气！",
        cake_fadein: "上coklat！",
        light_candle: "烧他！",
        wish_message: "生日快乐！",
        story: "SURPRISE MTFK",
    }
};
