const textArray = [
    "明日は晴れるかな。",
    "おはようございます。",
    "ありがとう、助かった。",
    "日本語が上手ですね。",
    "今日も一日頑張ろう。",
    "食べ物が美味しいです。",
    "新しい友達が欲しい。",
    "旅行に行きたいですね。",
    "家族と過ごす時間が好き。",
    "音楽を聴くのが好きです。",
    "スポーツは健康に良い。",
    "本を読むのが好きです。",
    "今日は何をしようか。",
    "何か楽しいことがあるといい。",
    "夢を追いかけて頑張ろう。",
    "美しい景色を見たいです。",
    "お腹がすいた、何か食べたい。",
    "笑うことが大切だと思います。",
    "冬は寒くて嫌いです。",
    "春が来た、桜が綺麗ですね。"
  ];
  
  let currentText = "";
  let score = 0;
  
  const textElement = document.getElementById("text");
  const inputElement = document.getElementById("input");
  const scoreElement = document.getElementById("score");
  
  function getRandomText() {
    const index = Math.floor(Math.random() * textArray.length);
    return textArray[index];
  }
  
  function updateText() {
    currentText = getRandomText();
    textElement.textContent = currentText;
    inputElement.value = "";
  }
  
  function calculateScore() {
    const correctChars = inputElement.value.split("").filter((char, i) => {
      return char === currentText[i];
    }).length;
    const accuracy = correctChars / currentText.length;
    const timeBonus = Math.max(0, (30 - timeLeft) / 30);
    const score = Math.floor(accuracy * 100 * timeBonus);
    return score;
  }
  
  function handleInput() {
    if (inputElement.value === currentText) {
      score += calculateScore();
      scoreElement.textContent = `Score: ${score}`;
      updateText();
    }
  }
  

  
  
  function startGame() {
    updateText();
    inputElement.addEventListener("input", handleInput);
  }
  
  function endGame() {
    inputElement.removeEventListener("input", handleInput);
    const scoreText = `Final score: ${score}`;
    alert(scoreText);
    updateText();
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
  }
  
  function init() {
    startGame();
    setInterval(endGame, 30000);
  }
  
  init();
  