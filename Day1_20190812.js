/*************************************************
* 입력 : 숫자배열 (ex. [4, 9, 11, 14]),
*        특정 수(더해서 나와야 할 값)
* 출력 : 합계의 조합을 이루는 인덱스 숫자배열\
*
* 알고리즘
* 1. 비교대상을 정한다.
* 2. 비교대상을 제외한 나머지 요소값을 더해서 결과를 확인한다.
* 3. 비교대상을 바꿔가며 1~2번을 반복하여 TARGET값이 되는 Index를 찾아 리턴한다.
*    (이중 For문을 이용하여 자기 자신을 제외한 모든 수와 비교 합산하여
*     target값과 같은 경우 해당 Index를 리턴한다.)
*********************************************/

const twoSum = (nums, target) => {
 let returnValue = [];
 let numsLength = nums.length;
 let isFind = false;
 
 for(let firstIndex=0; firstIndex<numsLength; firstIndex++){
   for(let secondIndex=0; secondIndex<numsLength; secondIndex++){
     // 자기자신을 제외한 다른값과 연산하기 위해 필요한 예외처리
     if(firstIndex === secondIndex) continue;
     
     // 두개의 다른 INDEX 배열 값들을 더하여 TARGET값과 비교
     let sum = nums[firstIndex] + nums[secondIndex];
     if(sum === target){
       // 찾은 값을 배열에 추가
       returnValue.push(firstIndex, secondIndex);
       isFind = true;
       break;
       // 바로 Return해도 되지만 Input/Output 순서를 맞추기 위해서
     }
   }
   
   // INDEX를 찾은 경우 FOR문을 나가기 위해서 사용
   if(isFind === true){
     break;
   }
 }
 
 return returnValue;
}

twoSum([1, 3, 7, 4, 9, 11, 14], 23);
