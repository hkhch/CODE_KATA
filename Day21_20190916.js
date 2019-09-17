/*************************************************
* 입력 : nums라는 정렬되지 않은 숫자 배열
* 출력 : t오름차순(1,2,3..10) 으로 정렬된 배열 리턴
*
* 알고리즘
* 1. 주어진 배열 중에서 최솟값을 찾는다.
* 2. 그 값을 맨 앞에 위치한 값과 교체한다(패스(pass)).
* 3. 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.
* 4. 하나의 원소만 남을 때까지 위의 1~3 과정을 반복한다.
*********************************************/

const selectionSort = (nums) => {
    for(let index=0; index<nums.length; index++){
        let selectedIndex = index;
        let minIndex = index;
        for(let sortIndex=selectedIndex+1; sortIndex<nums.length; sortIndex++){
            if(nums[minIndex] > nums[sortIndex]){
                minIndex = sortIndex;
            }
        }

        if(nums[selectedIndex] > nums[minIndex]){
            let temp = nums[selectedIndex];
            nums[selectedIndex] = nums[minIndex];
            nums[minIndex] = temp;
        }
    }

    return nums;
}

console.log(selectionSort([7,5,4,2]));