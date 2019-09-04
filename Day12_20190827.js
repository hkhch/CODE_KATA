/*************************************************
* 입력 : 문자로 구성된 배열을 input으로 전달
* 출력 : 문자를 뒤집어서 리턴
*
* 알고리즘 (기본적으로 모든 제공되는 함수 사용하지 않는 조건)
* 1. 첫번째 수를 저장
* 2. 전체배열 왼쪽으로 이동
* 3. 마지막 부분에 첫번째 수를 저장
* 4. 변환된 배열 리턴
*********************************************/

const reverseString = s => {
    let lastChar = "";
    let shiftIndex = 0;

    for(let index=0; index<s.length-1; index++){
        // 0. 마지막 문자 추출
        lastChar = s[s.length-1];

        // 1. 전체배열 왼쪽으로 이동
        let nextChar = s[shiftIndex];
        let currentChar = "";
        for(let sortIndex=shiftIndex; sortIndex<(s.length-1); sortIndex++){
            currentChar = nextChar;
            nextChar = s[sortIndex+1];
            s[sortIndex+1] = currentChar;
        }

        // 2. 첫번째 배열에 숫자 저장
        s[shiftIndex] = lastChar;
        shiftIndex++;
    }

    return s;
};

console.log(reverseString(["h","e","l","l","o"]));