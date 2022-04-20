(function() {
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  "use strict";
  window.addEventListener("load", init);

  function init() {
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", encrypt);
    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", reset);
    let capsButton = document.getElementById("all-caps");
    capsButton.addEventListener("click", allCaps);
    let smallFont = document.getElementById("12");
    smallFont.addEventListener("click", fontSize);
    let largeFont = document.getElementById("24");
    largeFont.addEventListener("click", fontSize);
    
  }

  function encrypt(){
    let text = document.getElementById("input-text");
    let afterEncryption = shiftCipher(text);
    document.getElementById("result").textContent = afterEncryption;
  }

  function reset(){
    let mainText = document.getElementById("input-text");
    mainText.value = "";
    let resultText = document.getElementById("result");
    resultText.textContent = "";
  }

  function fontSize(){
    let smallFont = document.getElementById("12");
    let largeFont = document.getElementById("24");
    let result = document.getElementById("result");
    if(smallFont.checked){ 
      result.style.fontSize = "12pt"; 
    }
    if(largeFont.checked){ 
      result.style.fontSize = "24pt"; 
    }
  }

  function allCaps(){
    let text = document.getElementById("result");
    if(document.getElementById("all-caps").checked) 
      text.style.textTransform = "uppercase";
    else
      text.style.textTransform = "lowercase";
  }
  

  function shiftCipher(text) {
    text = text.value.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

})();
