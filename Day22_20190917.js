/*************************************************
* 입력 : nums라는 정렬되지 않은 숫자 배열
* 출력 : 오름차순(1,2,3..10) 으로 정렬된 배열 리턴 (버블소트이용)
*
* 알고리즘
* 1. 기준위치부터 옆의 숫자를 비교한다.
* 2. 비교하여 끝값을 오른쪽으로 위치시킨다. (마지막 배열 인덱스까지 진행)
* 3. 모든 숫자배열이 끝날때까지 1~2번과정을 반복한다.
*********************************************/

const bubbleSort = nums => {
    for(let index=0; index<nums.length-1; index++){
        let sortLastIndex = (nums.length-1) - index;
        
        for(let sortIndex=0; sortIndex<sortLastIndex; sortIndex++){
            if(nums[sortIndex]>nums[sortIndex+1]){
                temp = nums[sortIndex];
                nums[sortIndex] = nums[sortIndex+1];
                nums[sortIndex+1] = temp;
            }
        }
    }

    return nums;
}

console.log(bubbleSort([7,5,4,2]));
