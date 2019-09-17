/*************************************************
* 입력 : 글자 배열
* 출력 : 동일한 글자끼리 담겨진 새로운 배열
*
* 알고리즘 (구멍이 있는 알고리즘)
* 1. 기준이 되는 아스키값의 합을 구한다.
* 2. 산출된 글자의 아스키값의 합과 비교한다.
* 3. 동일한 글자끼리 저장한다.
*********************************************/

/*
const groupAnagrams = strs => {
    let result = [];

    // 아스키코드 리턴
    function getASCII(string){
        let result = 0;
        
        for(let index=0; index<string.length; index++){
            result = result + string.charCodeAt(index);
        }

        return result;
    }

    for(let index=0; index<strs.length; index++){
        let baseWord = strs[index];
        let baseWordAscii = getASCII(baseWord);
        let isNotSame = false;

        for(let indexResult=0; indexResult<result.length; indexResult++){
            let compareWord = result[indexResult][0];
            let compareWordAscii = getASCII(compareWord);

            if(baseWordAscii === compareWordAscii){
                result[indexResult].push(compareWord);
                isNotSame = true;
                break;
            }
        }

        if(isNotSame === false){
            let newArray = [];
            newArray.push(baseWord);
            result.push(newArray);
        }
    }

    return result;
}
*/

/*************************************************
* 입력 : 글자 배열
* 출력 : 동일한 글자끼리 담겨진 새로운 배열
*
* 알고리즘
* 1. 주어진 글자열을 소트한다. (버블소트 이용) => 구현하기 가장 간단함(속도문제)
* 2. 정열된 객체의 저장공간에 대상 글자를 저장한다.
*   2.1 저장공간이 없는 경우(처음 비교되는 문자) 저장공간을 만든다.
* 3. 주어진 문자크기만큼 1~2번을 반복한다.
*********************************************/

const groupAnagrams = strs => {
    let result = {};
    let returnValue = [];

    function sortBubble(string){
        let stringArray = string.split("");
        let lastSortIndex = string.length;

        for(let index=0; index<string.length; index++){
            for(let sortIndex=0; sortIndex<lastSortIndex-1; sortIndex++){
                let temp = stringArray[sortIndex];
                if(temp > stringArray[sortIndex+1]){
                    temp = stringArray[sortIndex+1];
                    stringArray[sortIndex+1] = stringArray[sortIndex];
                    stringArray[sortIndex] = temp;
                }
            }

            lastSortIndex--;
        }

        return stringArray.toString();
    } 

    for(let index=0; index<strs.length; index++){
        let sortedWord = sortBubble(strs[index]);

        if(sortedWord in result){
            result[sortedWord].push(strs[index]);
        }
        else{
            let newArray = [strs[index]];
            result[sortedWord] = newArray;;
        }
    }

    for(let key in result){
        returnValue.push(result[key]);
    }

    return returnValue;
}




let result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
/*
[
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
]
*/

