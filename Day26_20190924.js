/*********************************************
* 2019 카카오 신입 공채 1차 코딩 테스트
*
* 설명 : RECURSION 이용
*********************************************/

const solution = record => {
    let names = {};
    let newRecord = [];
    let monitoringRecord = [];
    const ENTER = 'Enter';
    const LEAVE = 'Leave';
    const CHANGE = 'Change';
    
    // 데이터 전처리
    for(let index=0; index<record.length; index++){
      let element = record[index];
      let elementArray = element.split(' ');
      newRecord.push(elementArray);
    }

    // 이름 테이블 객체 만들기
    for(let index=0; index<newRecord.length; index++){
        if(newRecord[index][0] === CHANGE) continue;

        names[newRecord[index][1]] = newRecord[index][2];
    }
    
    // 이름 변경하기
    for(let index=0; index<newRecord.length; index++){
      if(newRecord[index][0] != CHANGE) continue;
      
      let userIdForChange = newRecord[index][1];
      let newUserName = newRecord[index][2];
      for(let changeIndex=0; changeIndex<newRecord.length; changeIndex++){
        if(userIdForChange === newRecord[changeIndex][1]){
            newRecord[changeIndex][2] = newUserName;
        }
        else{
            newRecord[changeIndex][2] = names[newRecord[changeIndex][1]];
        }
        
      }
    }
    
    // 모니터링 스트링 만들기
    for(let index=0; index<newRecord.length; index++){
      let message = '';
      
      if(newRecord[index][0] === CHANGE) continue;

      if(newRecord[index][0] === ENTER){
        message = newRecord[index][2] + '님이 들어왔습니다.';
      }
      else if(newRecord[index][0] === LEAVE){
        message = newRecord[index][2] + '님이 나갔습니다.';
      }
      monitoringRecord.push(message);
    }
    
    return monitoringRecord;
  }


  solution(
["Enter uid1234 Muzi", 
"Enter uid4567 Prodo", 
"Leave uid1234", 
"Enter uid1234 Prodo", 
"Change uid4567 Ryan"]
  );