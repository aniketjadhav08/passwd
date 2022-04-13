var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbersZeroToNine = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var selectedSpecialCharacters = ["@", "&", "$", "!", "#", "?"];

function generatePasswordUtility(passParam, passLen) {
  let pwdArr = [];
  let rootCount = Math.floor(passLen / passParam.length);
  for (let passChars in passParam) {
    sortAndLoop(passParam, passChars, rootCount);
    // if (passParam[passChars] === "LC") {
    //   getCharacters(lowerCaseLetters, rootCount, pwdArr);
    // }
    // if (passParam[passChars] === "UC") {
    //   getCharacters(upperCaseLetters, rootCount, pwdArr);
    // }
    // if (passParam[passChars] === "S") {
    //   getCharacters(selectedSpecialCharacters, rootCount, pwdArr);
    // }
    // if (passParam[passChars] === "N") {
    //   getCharacters(numbersZeroToNine, rootCount, pwdArr);
    // }
  }

  let deficit = passLen - pwdArr.length;
  let deficitArr = [];
  if (deficit > 0) {
    for (let i = 0; i < deficit; i++) {
      let randnum = Math.random();
      let arrIndex = Math.floor(randnum * passParam.length);
      deficitArr.push(passParam[arrIndex]);
    }
    for (let passCharsDeficit in deficitArr) {
      sortAndLoop(deficitArr, passCharsDeficit, 1);
      //   if (deficitArr[passCharsDeficit] === "LC") {
      //     getCharacters(lowerCaseLetters, 1, pwdArr);
      //   }
      //   if (deficitArr[passCharsDeficit] === "UC") {
      //     getCharacters(upperCaseLetters, 1, pwdArr);
      //   }
      //   if (deficitArr[passCharsDeficit] === "S") {
      //     getCharacters(selectedSpecialCharacters, 1, pwdArr);
      //   }
      //   if (deficitArr[passCharsDeficit] === "N") {
      //     getCharacters(numbersZeroToNine, 1, pwdArr);
      //   }
    }
  }

  function sortAndLoop(sourceArr, sourceKey, count) {
    if (sourceArr[sourceKey] === "LC") {
      getCharacters(lowerCaseLetters, count, pwdArr);
    }
    if (sourceArr[sourceKey] === "UC") {
      getCharacters(upperCaseLetters, count, pwdArr);
    }
    if (sourceArr[sourceKey] === "S") {
      getCharacters(selectedSpecialCharacters, count, pwdArr);
    }
    if (sourceArr[sourceKey] === "N") {
      getCharacters(numbersZeroToNine, count, pwdArr);
    }
  }

  randomArrayShuffle(pwdArr);

  return pwdArr.join("");
}

function getCharacters(inputArr, loopCounter, pwdArr) {
  for (let i = 0; i < loopCounter; i++) {
    var randnum = Math.random();
    var arrIndex = Math.floor(randnum * inputArr.length);
    pwdArr.push(inputArr[arrIndex]);
  }
}

function randomArrayShuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export { generatePasswordUtility };
