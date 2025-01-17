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
            count: 0,
            pointX: 0, pointY: 0,
            inputText: "我是預設文字啦~",
            toDoList: [], addToDo: "", isCheck: false
        }
    },
    // 方法區 (函式區)
    methods: {
        // 方法名稱 () {}
        test() {
            console.log("我是測試方法");
        },
        methodEvent(e) {
            console.log(e);
            console.log(e.target);
            console.log(e.x, e.y);  //點下去的座標
        },
        getPoint(e) {
            this.pointX = e.x;  // this 指此 Vue 應用程式內的資料
            this.pointY = e.y;
        },
        addToDoList() {
            // 將 addToDo 添加到 toDoList 陣列內
            this.toDoList.push(this.addToDo);
        }

    },
    // 計算處理區
    computed: {
        // 需要監聽資料以及處理的內容
        // 當資料內的 ischeck 被改變時會處理
        checked() {
            if (this.isCheck) return "已被勾選";    //如果使用者將 isCheck 勾選會執行這裡
            else return "尚未勾選"                  //否則執行這裡
        }
    }
});

// 將 app 變數安裝到 #app 元素
app.mount("#app");
