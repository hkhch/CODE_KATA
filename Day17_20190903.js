/*************************************************
* 입력 : 매일의 주식 가격 (배열)
* 출력 : 사고 판 가격 중에서 제일 큰 이익
*
* 알고리즘
* 1. 살 가격을 선택한다.
* 2. 팔 가격을 선정하여 차익을 계산한다.
* 3. 주어진 모든 가격에 대하여 1~2번을 반복하며 최고값을 
*    찾아낸다. (팔 가격선정은 산 날 이후부터 선택한다.)
*********************************************/

const maxProfit = prices => {
    let maxProfit = 0;
    let currentProfix = 0;
    
    for(let buyIndex=0; buyIndex<prices.length; buyIndex++){
        for(let sellIndex=buyIndex; sellIndex<prices.length; sellIndex++){
            if(buyIndex === sellIndex) continue;

            currentProfix = prices[sellIndex] - prices[buyIndex];
            if(maxProfit < currentProfix){
                maxProfit = currentProfix;
            }
        }
    }

    return maxProfit
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
