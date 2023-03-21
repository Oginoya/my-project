// main Function
// ゲームに必要な要素を取得
const startButton = document.getElementById('startButton');
const sentenceElement = document.getElementById('sentence');
const inputElement = document.getElementById('input');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');

// ゲームに必要な変数
const sentences = [
	"すもももももももものうち",
	"となりのきゃくはよくきゃくくうきゃくだ",
	"さあ、やってみよう",
	"ここはどこだ",
	"きのうのことをつぎの日曜日にかきます",
	"あしたはいいてんきですね",
	"わたしのなまえはうえだです",
	"せかいじゅうにひろがるおてあらい",
	"ぼくはいぬです",
	"きょうはいいてんきですね",
	"あしたのてんきはよくないです",
	"きのうのばんごはんはおいしかったです",
	"たいようがしずんできおおるみち",
	"にちようびはきょうとにいきました",
	"くにのはんにちにんげんはさんざんだ",
    "こころがやすらぐひととき",
    "さっぽろのゆきはふわふわしている",
    "しょくぱんまんがしょくぱんをたべている",
    "ぞうさん、ぞうさん、おかあさんが　いなくなった",
    "ぼうしをかぶった　いぬ　に　にせものがでてきた",
    "ゆきがふっている、　あついちきゅうの　ひが　つづいている",
    "ちいさな　ねこ　が、とびらをあけた",
    "いま、ともだちと　あそんでいるところだ",
    "しょうがくきん　が　かえってくる",
    "ねこが　あそびたがっている",
    "あたらしい　しょうひんが　とうちゃくした",
    "むかしむかし、あるところにおじいさんとおばあさんが　すんでいました",
    "あしたは　あめが　ふるかもしれない",
    "かみさまが　みている、あなたのしゅくだい",
    "たのしい　かぞくの　すがた",
    "おじいさんとあかんぼう",
    "にわにはにわにわとりがいる"
];

let currentSentenceIndex = 0;
let score = 0;
let timeLeft = 30;
let timerId;

// ゲームをスタートする関数
function startGame() {
// ボタンを無効化する
startButton.disabled = true;

// タイマーをスタートする
timerId = setInterval(() => {
	timeLeft--;
	timerElement.textContent = timeLeft;

	if (timeLeft === 0) {
		// 時間切れの場合
		endGame();
	}
}, 1000);

// 最初の文章を表示する
sentenceElement.textContent = sentences[currentSentenceIndex];

// 入力欄にフォーカスを移す
inputElement.focus();

// 入力された文字列が正しい場合に発生するイベント
inputElement.addEventListener('input', () => {
	const typedText = inputElement.value;

	if (typedText === sentences[currentSentenceIndex]) {
		// 文字列が正しい場合
		score++;
		scoreElement.textContent = score;

		// 入力欄をクリアする
		inputElement.value = '';

		// 次の文章を表示する
		currentSentenceIndex++;
		if (currentSentenceIndex === sentences.length) {
			// 最後の文章までタイプし終わった場合
			endGame();
		} else {
			sentenceElement.textContent = sentences[currentSentenceIndex];
		}
	}
});
}

// ゲームを終了する関数
function endGame() {
    // タイマーを停止する
    clearInterval(timerId);

    // ボタンを有効化する
    startButton.disabled = false;

    // 入力欄を無効化する
    inputElement.disabled = true;

    // リセットボタンを表示する
    resetButton.style.display = 'inline-block';

    // 結果を表示する
    resultElement.textContent = `スコア: ${score}`;

    // 変数をリセットする
    currentSentenceIndex = 0;
    score = 0;
    timeLeft = 30;

    // 入力欄からイベントを削除する
    inputElement.removeEventListener('input', () => {});

}

// リセットボタンをクリックした場合の処理
resetButton.addEventListener('click', () => {
    // 結果をリセットする
    resultElement.textContent = '';
    // リセットボタンを非表示にする
    resetButton.style.display = 'none';

    // ボタンを有効化する
    startButton.disabled = false;

    // 入力欄を有効化する
    inputElement.disabled = false;

    // スコアとタイマーをリセットする
    scoreElement.textContent = '0';
    timerElement.textContent = '30';
});

// ゲームスタートボタンをクリックした場合の処理
startButton.addEventListener('click', startGame);

// ゲームのメイン処理
function gameLoop() {
    // 残り時間が0になったらゲームオーバー
    if (timeLeft <= 0) {
        endGame();
        return;
    }

    // 1秒ごとに時間を減らす
    timerElement.textContent = timeLeft--;
    setTimeout(gameLoop, 1000);
}

// ゲームを開始する
function startGame() {
    // ボタンを無効化する
    startButton.disabled = true;

    // ランダムな文章を取得する
    const sentence = getRandomSentence();
    sentenceElement.textContent = sentence;

    // 入力欄を有効化する
    inputElement.disabled = false;
    inputElement.focus();

    // スコアを表示する
    scoreElement.textContent = score;

    // タイマーを開始する
    timeLeft = 30;
    timerElement.textContent = timeLeft--;
    setTimeout(gameLoop, 1000);

    // 入力欄に文字が入力された場合の処理
    inputElement.addEventListener('input', () => {
        // 入力した文字列を取得する
        const inputText = inputElement.value;

        // 入力した文字列が問題文と一致している場合
        if (inputText === sentence) {
            // スコアを加算する
            score++;

            // 次の問題に進む
            const nextSentence = getRandomSentence();
            sentenceElement.textContent = nextSentence;
            currentSentenceIndex++;
            inputElement.value = '';

            // スコアを更新する
            scoreElement.textContent = score;
        }
    });

}

// 初期化処理
function init() {
    // ボタンと要素を取得する
    startButton = document.getElementById('startButton');
    resetButton = document.getElementById('resetButton');
    sentenceElement = document.getElementById('sentence');
    inputElement = document.getElementById('input');
    scoreElement = document.getElementById('score');
    timerElement = document.getElementById('timer');
    resultElement = document.getElementById('result');
    // リセットボタンを非表示にする
    resetButton.style.display = 'none';

    // リセットボタンとスコアを初期化する
    resetButton.click();
}

// ページが読み込まれた時の処理
window.onload = init;
