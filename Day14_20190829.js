/*************************************************
* 입력 : 숫자배열
* 출력 : 0을 뒷쪽으로 쉬프트시켜 재배열된 입력된 배열
*
* 알고리즘
* 1. 숫자를 추출한다.
* 2. 숫자 0인지 확인하여 0이면 뒷쪽으로 이동시킨다.
*********************************************/

const moveZeroes = nums => {
    /*
    for(let index=0; index<nums.length; index++){
        if(nums[index] !== 0) continue;

        for(let sortIndex=index; sortIndex<(nums.length-1); sortIndex++){
            let temp = nums[sortIndex+1];
            nums[sortIndex+1] = nums[sortIndex];
            nums[sortIndex] = temp;
        }

        // 교환한 상태에서 교환한 값이 0이면 다시 쉬프트 로직을 태운다.
        if(nums[index] === 0){
            index = index - 1;
        }
    }
    */


    let zeroIndex = 0;

    while(true){
        // 0인 위치 찾기
        for(let index=0; index<nums.length; index++){
            if(nums[index] === 0){
                zeroIndex = index;
                break;
            }
        }

        // 쉬프트 시키기
        for(let sortIndex=zeroIndex; sortIndex<(nums.length-1); sortIndex++){
            let temp = nums[sortIndex+1];
            nums[sortIndex+1] = nums[sortIndex];
            nums[sortIndex] = temp;
        }

        // 작업완료 상태 확인
        let isFinish = false;
        for(let index=0; index<nums.length; index++){
            if(nums[index] === 0){
                isFinish = true;
            }
            else if(isFinish === true){
                if(nums[index] !== 0){
                    isFinish = false;
                    break;
                }
            }
        }

        if(isFinish === true){
            break;
        }
    }

    return nums;
}

let Input = [0, 0, 0, 1, 0, 1, 0, 3, 12, 0];
console.log(moveZeroes(Input));
