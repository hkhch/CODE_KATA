/*************************************************
* 입력 : 양수 N
* 출력 : 연속으로 이어지는 0 중에서 가장 큰 값 (1과 1사이에 있는 0)
*
* 알고리즘
* 1. 이진화 작업
* 2. 영의 개수 연산
*********************************************/

const solution = N => {
    let binary = [];
    let decimal = N;
    let index = 0;
    let zeroMaxCnt = 0;
    let zeroCnt = 0;
    let trigger = 0;
    
    // 이진화 작업
    while(true){
      if((decimal / 2) <= 1){
        binary[index++] = parseInt(decimal % 2);
        if(parseInt(decimal / 2)){
            binary[index] = parseInt(decimal / 2);
        }
        break;
      }
      else{
        binary[index++] = parseInt(decimal % 2);
        decimal = parseInt(decimal / 2);
      }
    }

    // 영 개수 연산
    for(let index=0; index<binary.length; index++){
        if(binary[index] === 1){
            if(trigger === 0){
                trigger = 1;
            }
            else if(trigger === 1){
                trigger = 2;
            }
            
            if(trigger === 2){
                if(zeroMaxCnt < zeroCnt){
                    zeroMaxCnt = zeroCnt;
                }
                zeroCnt = 0;
                trigger = 1;
            }
        }
        else{
            if(trigger === 1){
                zeroCnt++;
            }
        }
    }
    
    return zeroMaxCnt;
  }
  
  let result = solution(32);
  console.log(result);