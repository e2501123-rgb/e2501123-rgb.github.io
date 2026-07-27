// HTML側からプレイヤーの手を受け取って、ランダムに手を選択したコンピュータとじゃんけん
function janken(myHand) {
    // 必要となる変数（データ）の整理
    // じゃんけんの手を格納する変数を用意
    let handArray = ['グー', 'チョキ', 'パー'];

    // じゃんけんの結果の文字列を格納する変数を用意
    let resultArray = ['あいこです', 'あなたの負けです', 'あなたの勝ちです'];

    // 自分の手(引数の変数をそのまま使う)
    // myHand

    // コンピュータの手
    let computerHand = 0;

    // じゃんけんの結果
    let result = 0;

    // じゃんけんの処理
    // プレイヤーの手を決定
    // HTML側で選択されたものを使う
    console.log('あなたの手は：' + handArray[myHand]);



    // コンピュータの手を決定
    // ランダムに手を決めたい
    // Math.random()：0以上1未満の疑似乱数分布から1つ値を取得する
    let rand = Math.random() * 100;
    console.log('乱数:' + rand);

    // 乱数を整数に
    // Math.floor():与えられた引数以下の最大の整数を返す
    let rand_int = Math.floor(rand);
    console.log('乱数（整数）：' + rand_int);

    // 生成された乱数を３で割って、余りをコンピュータの手とする
    computerHand = rand_int % 3;
    console.log('computerHand:' + computerHand);
    console.log('コンピュータの手は：' + handArray[computerHand]);




    // // 勝敗判定
    // // if文
    // if (myHand === 0) {
    //     if (computerHand === 0) {
    //         result = 0;
    //     } else if (computerHand === 1) {
    //         result = 2;
    //     } else if (computerHand === 2) {
    //         result = 1;
    //     }

    // } else if (myHand === 1) {
    //     if (computerHand === 0) {
    //         resul = 1;
    //     } else if (computerHand === 1) {
    //         result =0;
    //     } else if (computerHand === 2) {
    //         result = 2;            
    //     }

    // } else if (myHand === 2) {
    //     if (computerHand === 0) {
    //         result = 2;
    //     } else if (computerHand === 1) {
    //         result = 1;
    //     } else if (computerHand === 2) {
    //         result = 0;           
    //     }

    // }


    // 上の勝敗判定を短くする
    // // 論理演算子を使ってif文の入れ子を無くす
    // if (myHand === computerHand) {
    //     result = 0;
    // } else if ((myHand === 0) && (computerHand === 1)) {

    // } else if ...


    // if文なしでじゃんけん
    result = (myHand = computerHand + 3) % 3


    // 結果の表示
    // consolに表示
    console.log(resultArray[result])
    console.log('------------------------------------------------')


    // HTMLに表示
    const janken_result = document.querySelector('#result');
    janken_result.textContent = resultArray[result];




}