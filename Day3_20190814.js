/********************************************************
* 입력 : 문자열
* 출력 : 입력된 문자열 중 중복되지 않는 가장 긴 연속된 문자열 개수
*       (ex. "abcabcabc" => 3, "aaaaa" => 1, ect.)
*
* 알고리즘
* 1. 문자열 하나를 추출한다.
* 2. 비교배열(동일하지 않은 문자들의 저장소)에 저장된 문자들과 비교한다.
*   2.1 비교배열에서 동일한 문자가 존재하는 경우
        2.1.1 비교배열 문자열 사이즈를 지금까지 최고로 긴 문자열 길이를 저장하는 저장소와 비교하여
              최고 길이 문자열 길이 저장소값을 업데이트 한다.
              (비교배열 저장소를 Clear하여 다음 작업을 준비한다.)
* 3. 비교배열에 현재 문자를 업데이트 한다.
* 4. 문자열 개수만큼 1~3을 반복한다.
*********************************************************/


const getLengthOfStr = str => {
    let maxContinuousStringCnt = 0;
    let recentContinuousString = [];

    // Max 문자열을 찾아내는 함수
    function CheckStringLength(index){
        // 1. 문자열에서 하나를 추출한다.
        let currentCharacter = str[index];

        // 2. 비교대상이 되는 문자배열 생성
        if(recentContinuousString.length === 0){
            recentContinuousString.push(currentCharacter);
        }
        else{
            // 3. 생성된 비교대상 문자배열에서 현재 추출된 문자와 같은 문자가 존재하는지 확인
            let isSame = false;
            let recnetContinuousStringCnt = recentContinuousString.length;
            for(let strIndex=0; strIndex<recnetContinuousStringCnt; strIndex++){
                // 같은 문자가 있는 경우
                if(recentContinuousString[strIndex] === currentCharacter){
                    isSame = true;
                    break;
                }
            }

            // 4. 위 로직을 통해 비교문자 배열에서 현재 문자가 존재하는 경우
            if(isSame === true){
                let lengthOfString = recentContinuousString.length;
                if(lengthOfString > maxContinuousStringCnt){
                    maxContinuousStringCnt = lengthOfString;
                }
                // 새로운 조합을 위해 비교문자 배여 초기화
                recentContinuousString = [];
            }

            // 5. 비교문자 배열 업데이트
            recentContinuousString.push(currentCharacter);

            // 6. 예외사항 (가장 마지막인 경우 최종결과 로직 확인)
            if(index === str.length-1){
                let lengthOfString = recentContinuousString.length;
                if(lengthOfString > maxContinuousStringCnt){
                    maxContinuousStringCnt = lengthOfString;
                }
            }
        }
    }

    // 정순으로 확인작업 진행
    for(let index=0; index<str.length; index++){
        CheckStringLength(index);
    }
    // 역순으로 확인작업 진행
    for(let index=str.length-1; index>=0; index--){
        CheckStringLength(index);
    }

    // 찾아진 값을 리턴한다.
    return maxContinuousStringCnt;
}

let lengthCnt = getLengthOfStr("1234123456789");
