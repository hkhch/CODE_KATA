/*************************************************
* 입력 : 오름차순인 숫자 nums 배열 & target인자
* 출력 : target이 몇 번째 index인지 리턴
*
* 알고리즘
* 1. 중심을 기준으로 찾을 target인자의 위치를 찾는다.
* 1.1 없을 경우 해당영역의 반을 나주어 다시 검색한다.
* 2. 찾을 때까지 위 단계를 반복한다.
*********************************************/

const search = (nums, target) => {
    let targetIndex = -1;
    let startIndex = 0;
    let endIndex = nums.length-1;
    
    while(true){
      let foundIndex = parseInt((endIndex-startIndex)/2) + startIndex;
            
      // 검색
      if(nums[foundIndex] === target){
        targetIndex = foundIndex;
        break;
      }

    // 예외처리
    if((foundIndex == startIndex) || (foundIndex == endIndex)){
        break;
    }
      
    // startIndex & endIndex 재설정
    if(target < nums[foundIndex]){
        startIndex = startIndex;
        endIndex = foundIndex;
    }
    else if(target > nums[foundIndex]){
        startIndex = foundIndex;
        endIndex = endIndex;
    }
    }
    
    return targetIndex;
  }
  
  console.log(search([-1,0,3,5,9,12], 9));
  console.log(search([-1,0,3,5,9,12], 2));