/*************************************************
* 입력 : 여러 괄호들로 이루어진 String인자
* 출력 : 규칙에 맞는 유효한 표현인지 확인 (true/flase)
*
* 알고리즘
* 1. 괄호를 추출한다.
* 2. 시작괄호인지 아닌지 확인한다.
*   2.1 오픈괄호이면 저장소에 저장한다.
*   2.2 클로즈괄호인면 가장 마지막의 괄호와 비교하여
*       true/false를 판단한다.
* 3. 괄호열이 끝날때까지 1~2을 반복한다.
*********************************************/

function isValid(s) {
  let result = true;
  let compareBrackets = [];
  let matchBrackets = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  

  for(let index=0; index<s.length; index++){
    // OPEN 괄호인 경우
    if((s[index] === "(") || (s[index] === "[") || (s[index] === "{")){
      compareBrackets.push(s[index]);
    }
    // CLOSE 괄호인 경우
    else if((s[index] === ")") || (s[index] === "]") || (s[index] === "}")){
      if(compareBrackets.length === 0){
        result = false;
      }
      else if(compareBrackets[compareBrackets.length-1] === matchBrackets[s[index]]){
        compareBrackets.pop();
      }
      else{
        result = false;
      }
    }
  }

  // 예외사항 체크
  if(compareBrackets.length !== 0){
    result = false;
  }

  return result;
}

isValid('(())[]')
