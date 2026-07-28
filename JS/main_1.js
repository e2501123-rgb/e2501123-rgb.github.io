console.log("Hello World!");

// エラー防止（if文で存在チェック）
const p_hello_init = document.querySelector("#say_hello");
if (p_hello_init) {
    p_hello_init.textContent = "いらっしゃいませ！カプセルワールドへようこそ！";
}

let totalCount = 50;
let currentCount = 12;
let remaining = totalCount - currentCount;
console.log(remaining);

let prizeItems = ["金色の激レアフィギュア", "ミニチュア看板キーホルダー", "ほのぼの動物フィギュア", "アクリルスタンド", "仮のアイテム"];
prizeItems.push("シークレットアイテム");
prizeItems.splice(3, 1);
let pop_data = prizeItems.pop();
console.log(pop_data);

for (let i = 0; i < prizeItems.length; i++) {
    console.log("景品" + i + ":" + prizeItems[i]);
}

let checkCount = 0;
while (checkCount < 5) {
    console.log("checkCountの値は：" + checkCount);
    if (checkCount === 3) {
        break;
    }
    checkCount++;
}

function changeWelcomeMessage(language) {
    let message = "";
    if (language === 0) {
        message = "こんにちは！カプセルワールドへようこそ！";
    } else if (language === 1) {
        message = "Hello! Welcome to Capsule World!";
    } else if (language === 2) {
        message = "Bonjour! Welcome to Capsule World!";
    } else if (language === 3) {
        message = "Hola! Welcome to Capsule World!";
    } else {
        message = "指定された言語はありません";
    }

    console.log(message);

    const p_hello = document.querySelector("#say_hello");
    if (p_hello) {
        p_hello.textContent = message;
    }
}

function playGachaGame() {
    let resultList = [
        'はずれ',
        '300円以下のガチャガチャ一回無料',
        '500円以下のガチャガチャ一回無料'
    ];

    let rand = Math.random() * resultList.length;
    let randIndex = Math.floor(rand);

    console.log('当選インデックス：' + randIndex);
    console.log('結果：' + resultList[randIndex]);

    const resultElement = document.querySelector('#result');
    if (resultElement) {
        resultElement.textContent = "結果：【 " + resultList[randIndex] + " 】";
    }
}

function diagnoseArea() {
    let areas = ["1階：最新アニメ＆キャラクターフロア", "2階：リアルミニチュア＆雑貨フロア", "3階：生き物＆面白ネタフロア"];
    let rand = Math.random() * areas.length;
    let randIndex = Math.floor(rand);

    const areaP = document.querySelector("#area_recommend");
    if (areaP) {
        areaP.textContent = "あなたに今一番おすすめなのは 「" + areas[randIndex] + "」 です！";
    }
}