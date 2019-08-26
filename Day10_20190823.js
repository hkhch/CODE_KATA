/*************************************************
* 입력 : Height 숫자로 이루어진 배열
* 출력 : 물을 담을 수 있는 가장 넓은 면적의 값을 반환
*
* 알고리즘
* 1. 기준점을 선택한다.
* 2. 가장 면적이 넓은 값을 찾아낸다.
* 3. 찾아낸 면적을 리턴한다.
*********************************************/

function getMaxArea(height) {
    let maxSize = 0;
    let createdCoordinate = [];
    const X = 0;
    const Y = 1;

    //  좌표계 생성 (없어되 되지만 가독성을 위해 좌표를 생성 : 작업 Index로 면적을 구해도 됨)
    for(let index=0; index<height.length; index++){
        let newElement = [index, height[index]];
        createdCoordinate.push(newElement);
    }

    // 면적 측정
    for(let index=0; index<createdCoordinate.length; index++){
        let baseElement = createdCoordinate[index];

        for(let elementIndex=0; elementIndex<createdCoordinate.length; elementIndex++){
            if(index === elementIndex) continue;
            let comparedElement = createdCoordinate[elementIndex];
            let X_length = Math.abs(baseElement[X] - comparedElement[X]);
            let minY_length = (baseElement[Y] > comparedElement[Y])? comparedElement[Y] : baseElement[Y];
            let size = X_length * minY_length;

            if(maxSize < size){
                maxSize = size;
            }
        }
    }

    return maxSize;
}

getMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);