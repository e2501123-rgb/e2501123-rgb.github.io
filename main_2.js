let floorMaps = ["IMG/CapselToyMap1.png", "IMG/CapselToyMap2.png", "IMG/CapselToyMap3.png"];
let floorNames = ["1階：最新アニメ・キャラクターフロア", "2階：ミニチュア・雑貨フロア", "3階：プレミアム・限定フロア"];
let currentFloor = 0;

function switchFloor(step) {
    currentFloor = currentFloor + step;

    if (currentFloor < 0) {
        currentFloor = floorMaps.length - 1;
    } else if (currentFloor >= floorMaps.length) {
        currentFloor = 0;
    }

    const mapImg = document.querySelector("#map_img");
    mapImg.src = floorMaps[currentFloor];

    const floorTitle = document.querySelector("#floor_title");
    floorTitle.textContent = "現在の表示: " + floorNames[currentFloor];

    console.log("表示フロア変更: " + floorNames[currentFloor]);
}

function checkCongestion() {
    let rand = Math.random() * 100;
    let rand_int = Math.floor(rand);
    let val = rand_int % 3;

    let statusText = "";

    if (val === 0) {
        statusText = "【空いています】快適にお買い物をお楽しみいただけます！";
    } else if (val === 1) {
        statusText = "【やや混雑】一部の人気の台で並びが発生しています。";
    } else if (val === 2) {
        statusText = "【大変混雑】ただいま店内が賑わっております。";
    } else {
        statusText = "指定された状態はありません";
    }

    console.log("混雑判定値: " + val);
    console.log(statusText);

    const statusP = document.querySelector("#congestion_status");
    statusP.textContent = statusText;
}