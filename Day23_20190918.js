/*************************************************
* 입력 : 문자열
* 출력 : 뒤집힌 문자열 리턴
*
* 알고리즘
* 1. 문자의 끝인지 확인하여 문자를 리턴한다.
* 2. 리턴받은 문자열에 현재의 문자열을 더한다.
* 3. 1~2번을 만족하는 재귀함수를 작성하여 입력된 문자열을 
     대상으로 재귀함수를 호출한다.
*********************************************/

const reverseString = str => {
    let result = "";
    
    function recursion(index, words){
      let returnValue = "";
      
      // Base case
      if(index === (words.length-1)){
        returnValue = words[index];
      }
      // Recursion case
      else{
        returnValue = recursion(index+1, words);
        returnValue += words[index];
      }
      
      return returnValue;
    }
    
    result = recursion(0, str);
    return result;
  }
  
  console.log(reverseString('hello') + '님');