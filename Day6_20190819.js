/*************************************************
* 입력 : 로마자 스트링 (s)
* 출력 : 변환된 아라비아 숫자
*
* 알고리즘
* 1. 로마자에서 문자하나를 추출한다.
* 2. 예외문자인자 확인한다. (I, X, C)
*   2.1 예외문자인 경우 
        다음 수로 뺀 수를 저장공간에 저장한다.
    2.2 일반문자인 경우
        해당 문자에 상응하는 아라비아 숫자를 찾아 저장공간에 더해준다.
* 3. 로마자가 모두 추출될때까지 1~2번을 반복한다.
  (하나의 저장공간에 1~2번을 진행하는 동안 더해간다.)
* 4. 찾은 값을 리턴한다.
*********************************************/

function romanToNum(s) {
  let arabicNum = 0;
  let lookupTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let realIndex = 0;

  for(let index=0; index<s.length; index = realIndex){
    // 0. 로마자 추출
    let romanNum = s[index];

    // 1. 예외문자 확인 (가장 마지막 인덱스에 대해서는 제외)
    let isException = false;
    if(index < s.length){
      let nextRomanNum = s[index+1];
      if(romanNum === "I"){
        if(nextRomanNum === "V"){
          arabicNum += 4;
          realIndex++;
          isException = true;
        }
        else if(nextRomanNum === "X"){
          arabicNum += 9;
          realIndex++;
          isException = true;
        }
      }
      else if(romanNum === "X"){
        if(nextRomanNum === "L"){
          arabicNum += 40;
          realIndex++;
          isException = true;

        }
        else if(nextRomanNum === "C"){
          arabicNum += 90;
          realIndex++;
          isException = true;
        }
      }
      else if(romanNum === "C"){
        if(nextRomanNum === "D"){
          arabicNum += 400;
          realIndex++;
          isException = true;

        }
        else if(nextRomanNum === "M"){
          arabicNum += 900;
          realIndex++;
          isException = true;
        }
      }
    }

    // 2. 일반문자인 경우
    if(isException == false){
      arabicNum += lookupTable[romanNum];
    }

    // 3. 다음 작업을 위해 Index 증가
    realIndex++;
  }

  return arabicNum;
}


let arabicNum = romanToNum("CDXLIV");
console.log("Result : " + arabicNum);
