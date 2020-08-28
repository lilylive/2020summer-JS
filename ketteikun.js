'use strict';
const choicesInputA = document.getElementById('choices-a');
const choicesInputB = document.getElementById('choices-b');
const choicesInputC = document.getElementById('choices-c');
const decisionButton = document.getElementById('decision');
const resultArea = document.getElementById('result-area');
const godimgInput = document.getElementById('godimg');
const tweetArea = document.getElementById('tweet-area');

//すでに要素がある場合は、新しい子要素を追加しない。
function removeAllChirdren (element) {
  while (element.firstChild){
    element.removeChild(element.firstChild);
  }
}

//ボタンをクリックした場合の挙動
decisionButton.onclick = ()　=> {
  decisionButton.onclick = "disabled = true;"
  const answerA = choicesInputA.value;
  const answerB = choicesInputB.value;
  const answerC = choicesInputC.value;
  

  var answerarray = [answerA, answerB,answerC];
  if(answerA.length === 0){
    return;
  }

  if(answerB.length === 0){
    return;
  }
  if(answerC.length === 0){
    return;
  }
    //選択肢から回答を選ぶ
  var random = answerarray[Math.floor(Math.random()*answerarray.length)];
  console.log(random);
  
  　//神様の登場
  godimgInput.style.display= "block";
  godimgInput.animate({
    opacity: [0, 1]},1500)
    
  
    
    
    const header = document.createElement('h3');
    header.innerText = '判定結果';
    resultArea.appendChild(header);
   
    //回答の表示
    removeAllChirdren(resultArea);
    const paragraph = document.createElement('p');
    paragraph.innerText = random;
    resultArea.appendChild(paragraph);

    //回答の語尾
    const paragraph2 = document.createElement('P');
    paragraph2.innerText = 'がお主の求める答えじゃ！！！！';
    resultArea.appendChild(paragraph2);
    

    //ツィートエリアの表示
    removeAllChirdren(tweetArea);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
      + encodeURIComponent('選択くん')
      + '&ref_src=twsrc%5Etfw';
     anchor.setAttribute('href', hrefValue);
     anchor.className = 'twitter-hashtag-button';
     anchor.setAttribute('data-text', '選択くんが教えてくれるわたしの答えは', random);
     anchor.setAttribute('data-url', "https://lilylive.github.io/2020summer-JS/ketteikun.html");
     anchor.innerText = 'Tweet #選択くん';
     tweetArea.appendChild(anchor);
    
     
     const script = document.createElement('script');
     script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
     tweetArea.appendChild(script);

     return random;
    
    };  

