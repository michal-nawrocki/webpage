/*

UI Mockup of github.com/onfe/terminal
a terminal 'emulator' written in js.

for teaching shell concepts or giving examples
eg. how to install using npm
*/


setInterval(caretToggle, 500);

function caretToggle() {
  var caret = document.getElementsByClassName("term-caret")[0];
  if (caret.classList.contains('blink')) {
    caret.classList.remove('blink');
  } else {
    caret.classList.add('blink');
  }
}

function consoleText(words, colors) {
  if (colors === undefined) colors = ["#7af94f"];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById("consoleText");
  target.setAttribute('style', 'color:' + colors[0]);
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0])
        letterCount += x;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
}

window.onload = function () {
    consoleText(["Hello there! I'm Michal and welcome to my webpage. I'm a software engineer in my 3rd year at Univeristy of Birmingham. Come and have a look!", 'Made with Love.']);
};

