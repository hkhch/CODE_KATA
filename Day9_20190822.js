/*************************************************
* 입력 : 숫자로 이루어진 배열 (nums)
* 출력 : 가장 자주 등장한 숫자를 k개수만큼 리턴
*
* 알고리즘
* 1. 숫자를 추출한다.
* 2. 추출된 숫자가 기존에 존재하는지 확인 후 갯수를 증가한다.
* 3. 만들어진 숫자 집합에서 가장 빈도가 높은 숫자 k만큼을
     찾아내어 리턴한다.
*********************************************/

function topK(nums, k) {
  let returnValue = [];
  let numsCnt = {};
  
  for(let index=0; index<nums.length; index++){
    // 숫자를 추출한다.
    let key = String(nums[index]);

    // 추출된 숫자가 기존에 존재하는지 확인 후 갯수를 증가한다.
    if(typeof(numsCnt[key]) === "undefined"){
      numsCnt[key] = 1;
    }
    else{
      numsCnt[key] += 1;
    }
  }

  // 오름차순의 순서에 따라 숫자 추출
  for(let index=0; index<k; index++){
    let firstKey = Object.keys(numsCnt)[0];
    let maxNumKey = String(firstKey);
    let maxNum = numsCnt[firstKey];

    for(let key in numsCnt){
      if(numsCnt[key] > maxNum){
        maxNum = numsCnt[key];
        maxNumKey = key;
      }
    }

    returnValue.push(Number(maxNumKey));
    delete numsCnt[maxNumKey];
  }

  return returnValue;
}

let result = topK([1,1,2], 2);
console.log(result);