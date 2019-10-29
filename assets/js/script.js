let display = document.getElementById('display');
let hide = document.getElementById('hide');
let text = document.getElementById('text');
display.onclick = function(){
  text.style.visibility = 'visible';
}
hide.onclick = function(){
  text.style.visibility = 'hidden';
  }
