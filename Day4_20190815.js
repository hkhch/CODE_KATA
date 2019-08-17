/*************************************************
* 입력 : 정수인자(숫자)
* 출력 : 뒤집어서 숫자의 모양이 동일하면 true, 그렇지 않으면 false 
        (ex. 123->321(false), 1221->1221(true), -121->121-(false))
*
* 알고리즘
* 1. 숫자를 문자열로 변환한다.
* 2. 문자열에서 문자를 추출하여 새로운 문자열 조합을 만든다.
     (기존에 존재하는 문자열의 앞쪽에 값을 추가하여 역삽입)
* 3. 문자가 모두 추출 될 때까지 1~2번을 반복한다.
* 4. 새로 만들어진 문자열과 숫자를 변환한 문자열을 비교한다.
     (같으면 false, 다르면 true를 반환)
*********************************************/

const sameReverse = num => {
    let returnValue = false;
    let strNum = String(num);
    let strNumInversed = "";

    // 숫자를 추출하여 역전시키는 로직
    for(let index=0; index<strNum.length; index++){
        strNumInversed = strNum[index] + strNumInversed;
    }

    // 입력 숫자를 문자열로 변환한 변수와 역전시킨 문자열이 동일한지 비교
    if(strNum === strNumInversed){
        returnValue = true;
    }

    return returnValue;
}
