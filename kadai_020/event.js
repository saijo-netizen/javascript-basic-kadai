// output-btnというidを持つHTML要素を取得し、定数に代入する
const outputBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
outputBtn.addEventListener('click', () => {

  const text = document.getElementById('text');
  text.textContent = 'ボタンをクリックしました';

});


