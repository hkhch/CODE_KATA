/*************************************************
* 입력 : 정수인자(숫자)
* 출력 : 뒤집어서 숫자를 반환 (ex. 1234 -> 4321, -1234 -> -4321)
*
* 알고리즘
* 1. 숫자를 스트링으로 변환
* 2. 스트링을 배열로 변환
* 3. 첫번째 인자확인 ("0" or "-1")하여
*    예외처리 ("0" -> 삭제, "-1"이면 음수화)
* 4. 숫자자릿수만큼 For문을 이용하여 역전시킴
* 5. 역전된 스트링배열을 다시 스트링으로 변환
* 6. 스트링을 다시 숫자로 변환 후 리턴
*********************************************/

const reverse = x => {
    let returnValue = 0;
    let stringNumber = String(x);
    let stringArray = stringNumber.split("");
    let newStringArray = [];
    let signForNumber = 1; // 1:양수, -1:음수

    for(let index = 0; index<stringArray.length; index++){
        // 예외처리 1 (처음에 "-"인 경우 부호 고려)
        if((index === 0) && (stringArray[0] === "-")){
            // 부호설정
            signForNumber = -1;
            continue;
        }
        // 예외처리 2 (마지막 숫자가 "0"인 경우 무시)
        if((index === stringArray.length-1) && (stringArray[stringArray.length-1] === 0)){
            break;
        }

        newStringArray.unshift(stringArray[index]);
    }

    // 배열을 스트링으로 변환
    let newNumberString = newStringArray.join("");
    // 결과 스트링을 숫자로 변환
    returnValue = signForNumber * Number(newNumberString);

    return returnValue;
}

let reverseNo1 = reverse(1234);
console.log(reverseNo1);
let reverseNo2 = reverse(-1234);
console.log(reverseNo2);
let reverseNo3 = reverse(1230);
console.log(reverseNo3);


