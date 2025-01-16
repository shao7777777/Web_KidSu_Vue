console.log("測試");

// 建立 Vue 應用程式
const app = Vue.createApp({
    // 資料區域
    data() {
        // 資料物件
        return {
            // 第一個文字：值
            firstText: "嗨! 這是 Vue 的資料~ ",
            textColor: "red",
            fontSize: 24,
            canBuy: false,
            web: [
                "HtML", "CSS", "JavaScript", "jQuery", "Vue", "React", "Angular", "Git"
            ],
            count: 0
        }
    }
});

// 將 app 變數安裝到 #app 元素
app.mount("#app");
