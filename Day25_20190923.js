/*********************************************
* RESERSE LINKED LIST
*
* 설명 : RECURSION 이용
*********************************************/

const ListNode = val => {
    this.val = val;
    this.next = null;
  }
  
  const reverseList = head => {
    function recurson(node){
        let endNodeForLink = null;
        let workNode = null;
        let index = 0;

        // Base Conditon
        if(node.next === null){
            head = node;
        }
        // Recursion Conditon
        else{
            recurson(node.next);

            workNode = head;
            while(true){
                if(workNode.next === null){
                    node.next = null;
                    workNode.next = node;
                    break;
                }
                workNode = workNode.next;
            }
        }
    }
    
    recurson(head);
    
    return head;
  };

  nodes = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null
      }
    }
  };

  head = nodes;

  reverseList(head);