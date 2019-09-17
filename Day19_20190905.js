/*************************************************
* 입력 : 숫자로 이루어진 리스트 nums
* 출력 : 어떤 연속적인 요소를 더했을 때 가장 큰 값
*
* 알고리즘
* 1. 기준이 되는 숫자를 정한다. (앞에서 부터 차례로 정한다.)
* 2. 기준 숫자에 값을 더해가면서 최고가 되는 합을 찾는다.
* 3. 최고의 합을 리턴한다.
*********************************************/

const maxSubArray = nums => {
    let maxSum = 0;

    // 최소값으로 maxSum을 설정
    for(let index=0; index<nums.length; index++){
        if(nums[index] < 0){
            maxSum = maxSum + nums[index];
        }
    }

    for(let index=0; index<nums.length; index++){
        let sum = 0;

        for(let sumIndex=index; sumIndex<nums.length; sumIndex++){
            sum = sum + nums[sumIndex];
            
            if(maxSum < sum){
                maxSum = sum;
            }
        }
    }

    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
