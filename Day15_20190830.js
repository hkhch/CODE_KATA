/*************************************************
* 입력 : factorial 기준치
* 출력 : factorial 값 리턴
*
* 알고리즘
* 1. 탈출조건 확인
* 2. factorial 점화식 실행 (재귀함수 호출) : f(n) = f(n-1) * n
*********************************************/

const factorial = n => {
    let result = 0;
    
    // BASE 조건
    if(n <= 1){
      return 1;
    }
    // RECURSION 조건
    else{
      result = factorial(n-1) * n; 
    }
    
    return result;
  }
  
  console.log(factorial(5));