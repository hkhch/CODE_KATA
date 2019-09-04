/*************************************************
* 입력 : 양수로 이루어진 m x n 그리드를 인자
* 출력 : 상단 왼쪽에서 시작하여, 하단 오른쪽까지 가는 길의 요소를 다 더했을 때, 가장 작은 합 리턴
*
* 알고리즘 (기본적으로 모든 제공되는 함수 사용하지 않는 조건)
* 1. 두 경로중 작은 숫자의 경로를 찾아 값을 더해간다.
* 2. 끝점(0, 0)을 만날때까지 1번을 반복한다.
     (연산의 편의성을 위해 거꾸로 진행하였음)
*********************************************/

const minPathSum = grid => {
    let m = grid[0].length;
    let n = grid.length;
    let minSum = -1;
  
    /*
    // 1. 초기설정
    minSum = grid[n-1][m-1];
    
    // 2. 재귀함수 (거꾸로 찾아가는 로직)
    function FindMinSum(x, y){
      // Base Condition (탈출조건)
      if((x==0) && (y==0)){
        return grid[0][0];
      }
      // Recursion (재귀조건))
      // 작은쪽으로 이동
      else{
        if(x == 0){
            minSum += grid[y-1][x];
            FindMinSum(x, y-1);
        }
        else if(y == 0){
            minSum += grid[y][x-1];
            FindMinSum(x-1, y);
        }
        else if(grid[y-1][x] > grid[y][x-1]){
          minSum += grid[y][x-1];
          FindMinSum(x-1, y);
        }
        else{
          minSum += grid[y-1][x]; 
          FindMinSum(x, y-1);
        }
      }
    }
    */
    
    // 1. 재귀함수 (거꾸로 찾아가는 로직)
    function FindMinSum(x, y, sum){
         // Base Condition (탈출조건)
         if((x==(m-1)) && (y==(n-1))){
            if((minSum > sum) || (minSum == -1)){
                minSum = sum;
            }
         }
         // Recursion (재귀조건))
         // 작은쪽으로 이동
         else{
           if(x == (m-1)){
               sum += grid[y+1][x];
               FindMinSum(x, y+1, sum);
           }
           else if(y == (n-1)){
               sum += grid[y][x+1];
               FindMinSum(x+1, y, sum);
           }
           else{
                let sum1 = sum + grid[y][x+1];
                FindMinSum(x+1, y, sum1);

                let sum2 = sum + grid[y+1][x]; 
                FindMinSum(x, y+1, sum2);
           }
           /*
           else if(grid[y+1][x] > grid[y][x+1]){
                sum += grid[y][x+1];
                FindMinSum(x+1, y, sum);
           }
           else{
                sum += grid[y+1][x]; 
                FindMinSum(x, y+1, sum);
           }
           */
         }
       }
 
    // 재귀함수 호출
    FindMinSum(0, 0, grid[0][0]);
    
    return minSum;
  };
  
/*
  let inputData = [
                [1,3,1],
                [1,5,1],
                [4,2,1]];
*/

/*
 let inputData = [
    [1,3,1]];
*/

/*
let inputData = [
    [1],
    [3],
    [1]];
*/

let inputData = [
    [1,1,1],
    [1,2,1],
    [3,2,1]];
    


  let result = minPathSum(inputData);
  console.log(result);


/*************************************************
* 입력 : 양수로 이루어진 m x n 그리드를 인자
* 출력 : 상단 왼쪽에서 시작하여, 하단 오른쪽까지 가는 길의 요소를 다 더했을 때, 가장 작은 합 리턴
*
* 알고리즘 (기본적으로 모든 제공되는 함수 사용하지 않는 조건)
* 1. 두 경로중 작은 숫자의 경로를 찾아 값을 더해간다.
* 2. 끝점(0, 0)을 만날때까지 1번을 반복한다.
     (연산의 편의성을 위해 거꾸로 진행하였음)
*********************************************/
/*
const minPathSum = grid => {
    let m = grid[0].length;
    let n = grid.length;
    let minSum = 0;
    
    // 1. 초기설정
    minSum = grid[n-1][m-1];
    
    // 2. 재귀함수 (거꾸로 찾아가는 로직)
    function FindMinSum(x, y){
      // Base Condition (탈출조건)
      if((x==0) && (y==0)){
        return grid[0][0];
      }
      // Recursion (재귀조건))
      // 작은쪽으로 이동
      else{
        if(x == 0){
            minSum += grid[y-1][x];
            FindMinSum(x, y-1);
        }
        else if(y == 0){
            minSum += grid[y][x-1];
            FindMinSum(x-1, y);
        }
        else if(grid[y-1][x] > grid[y][x-1]){
          minSum += grid[y][x-1];
          FindMinSum(x-1, y);
        }
        else{
          minSum += grid[y-1][x]; 
          FindMinSum(x, y-1);
        }
      }
    }
 
    // 재귀함수 호출
    FindMinSum(m-1, n-1);
    
    return minSum;
  };
  */
  
/*
let inputData = [
    [1,1,1],
    [1,2,1],
    [3,2,1]];
*/
/*
  let inputData = [
                [1,3,1],
                [1,5,1],
                [4,2,1]];
*/

/*
 let inputData = [
    [1,3,1]];
*/

/*
let result = minPathSum(inputData);
console.log(result);
*/


// [최종 정답]
/*************************************************
* 입력 : 양수로 이루어진 m x n 그리드를 인자
* 출력 : 상단 왼쪽에서 시작하여, 하단 오른쪽까지 가는 길의 요소를 다 더했을 때, 가장 작은 합 리턴
*
* 알고리즘 (기본적으로 모든 제공되는 함수 사용하지 않는 조건)
* 1. 두 경로를 찾아가며 다음 이동경로의 값을 더한다.
* 2. 끝점(0, 0)을 만날때까지 1번을 반복한다.
     (현재의 값이 최소값인지 확인한다.)
*********************************************/

const minPathSum = grid => {
    let m = grid[0].length;
    let n = grid.length;
    let minSum = -1;
  
    // 1. 재귀함수 (거꾸로 찾아가는 로직)
    function FindMinSum(x, y, sum){
         // Base Condition (탈출조건)
         if((x==(m-1)) && (y==(n-1))){
            if((minSum > sum) || (minSum == -1)){
                minSum = sum;
            }
         }
         // Recursion (재귀조건))
         // 작은쪽으로 이동
         else{
           if(x == (m-1)){
               sum += grid[y+1][x];
               FindMinSum(x, y+1, sum);
           }
           else if(y == (n-1)){
               sum += grid[y][x+1];
               FindMinSum(x+1, y, sum);
           }
           else{
                let sum1 = sum + grid[y][x+1];
                FindMinSum(x+1, y, sum1);

                let sum2 = sum + grid[y+1][x]; 
                FindMinSum(x, y+1, sum2);
           }
         }
       }
 
    // 재귀함수 호출
    FindMinSum(0, 0, grid[0][0]);
    
    return minSum;
  };

/*
  let inputData = [
                [1,3,1],
                [1,5,1],
                [4,2,1]];
*/
/*
 let inputData = [
    [1,3,1]];
*/

/*
  let result = minPathSum(inputData);
  console.log(result);
*/