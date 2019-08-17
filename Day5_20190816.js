/*************************************************
* 입력 : 단어가(문자열) 담긴 배열 (strs)
* 출력 : 단어들에서 공통으로 시작하는 단어(prefix) 반환
*
* 알고리즘
* 1. 단어에서 문자하나를 추출한다.
* 2. 추출한 문자가 다른 단어와 동일한지 확인한다.
*   2.1 동일한 경우 새로 만든 저장소에 담아 놓는다.
* 3. 하나라도 다른 단어가 나올때까지 1~2번을 반복한다.
* 4. 찾은 prefix를 리턴한다.
*********************************************/

const getPrefix = strs => {
    let prefix = "";
    let minWordLength = 0;
    let minWordIndex = 0;

    // 0. 예외처리 (비교단어들이 없는 경우)
    if(strs.length === 0){
        return prefix;
    }

    // 1. 문자길이가 가장 작은 단어의 길이를 찾는다.
    for(let index=0; index<strs.length; index++){
        if(minWordLength > strs[index].length){
            minWordLength = str[index].length;
            minWordIndex = index;
        }
    }

    // 2. 가장 작은 문자길이를 갖은 단어를 기준으로 하여 다른 단어들과 비교하여
    //    공통된 profix를 찾아낸다.
    for(let index=0; index<strs[minWordIndex].length; index++){
        let baseCharacter = strs[minWordIndex][index];
        let isAllSame = true;

        // 입력된 배열의 해당 Index의 문자를 비교하여 같은 경우 prefix 문자열에 추가한다.
        for(let inputStrArrayIndex=0; inputStrArrayIndex<strs.length; inputStrArrayIndex++){
            if(baseCharacter !== strs[inputStrArrayIndex][index]){
                isAllSame = false;
                break;
            }
        }

        if(isAllSame === true){
            prefix = prefix + baseCharacter;
        }
        else{
            break;
        }
    }

    return prefix;
}


let returnValue = getPrefix(["aa", "aa"]);
console.log(returnValue);