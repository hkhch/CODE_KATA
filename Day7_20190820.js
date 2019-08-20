/*************************************************
* 입력 : 숫자로 이루어진 배열
* 출력 : 숫자중에서 과반수가 넘는 숫자
*
* 알고리즘
* 1. 숫자를 추출한다.
* 2. 숫자들의 빈도를 체크한다.
* 3. 빈도 중 과반수가 넘는 숫자를 찾는다.
* 4. 찾은 값을 리턴한다.
*********************************************/

function moreThanHalf(nums) {
  let majorityNum = 0;
  let checkingNum = {};

  // 숫자들의 빈도를 체크한다.
  for(let index=0; index<nums.length; index++){
    // 처음 생성되는 경우
    if(typeof(checkingNum[String(nums[index])]) === "undefined"){
      checkingNum[String(nums[index])] = 1;
    }
    // 이미 자료구조가 존재하는 경우
    else{
      checkingNum[String(nums[index])] += 1;
    }
  }

  // 빈도 중 과반수가 넘는 숫자를 찾는다.
  for(let key in checkingNum){
    if(checkingNum[key] > Number(nums.length/2)){
      majorityNum = Number(key);
      break;      
    }
  }

  return majorityNum;
}

console.log(moreThanHalf([3, 2, 3]))