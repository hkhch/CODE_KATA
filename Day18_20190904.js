/*************************************************
* 입력 : 글자 배열
* 출력 : 동일한 글자끼리 담겨진 새로운 배열
*
* 알고리즘
* 1. 기준이 되는 아스키값의 합을 구한다.
* 2. 산출된 글자의 아스키값의 합과 비교한다.
* 3. 동일한 글자끼리 저장한다.
*********************************************/

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


let result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
/*
[
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
]
*/

