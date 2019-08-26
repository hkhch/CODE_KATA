/*************************************************
* 입력 : 복소수(complex number)가 string
* 출력 : nput으로 받은 두 수를 곱
*
* 알고리즘
* 1. 실수부 & 실수부 연산
* 2. 실수부 & 허수부 연산
* 3. 허수부 & 허수부 연산
* 4. 연산된 값 조합후 리턴
*********************************************/

const complexNumberMultiply = (a, b) => {
    let result = "";
    let completNumA = a.split("+");
    let completNumB = b.split("+");
    let constNum = 0;
    let completNum = 0;

    debugger;
    // 데이터 가공
    completNumA[1] = completNumA[1].replace("i", "");
    completNumB[1] = completNumB[1].replace("i", "");

    // 실수부A * 실수부B
    constNum = Number(completNumA[0]) * Number(completNumB[0]);
    // (실수부A * 허수부B) + (허수부A * 실수부B)
    completNum = Number(completNumA[0]) * Number(completNumB[1]) +
                 Number(completNumA[1]) * Number(completNumB[0]);
    // (허수부A * 허수부B)
    constNum += -(Number(completNumA[1]) * Number(completNumB[1]));

    result = `${constNum}+${completNum}i`;
    return result;
}

console.log(complexNumberMultiply("1+-1i", "1+-1i"));

