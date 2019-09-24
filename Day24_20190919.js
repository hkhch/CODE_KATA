/*********************************************
* LINKED LIST
*
* 설명 : NODE를 이용한 DATA CONTAINER
*********************************************/

class MyLinkedList {
    constructor() {
        this.header = null;
        this.nodeCnt = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let searchedValue = -1;

        if((index >= this.nodeCnt) || (index < 0)){
            return -1;
        }

        let nodePointer = this.header;
        for(let listIndex=0; listIndex<=index; listIndex++){
            if(listIndex === index){
                searchedValue = nodePointer[0];
            }
            nodePointer = nodePointer[1];
        }

        return searchedValue;
    }

    /**
     * @param {number} val
     */
    addAtHead(val) {
        let newNode = [];
        newNode[0] = val;
        newNode[1] = null;

        let nowHeader = this.header;
        newNode[1]= nowHeader;
        this.header = newNode;

        this.nodeCnt++;
    }

    /**
     * @param {number} val
     */
    addAtTail(val) {
        let newNode = [];
        newNode[0] = val;
        newNode[1] = null;

        if(this.nodeCnt === 0){
            addAtHead(val)
        }
        else{
            let nodePointer = this.header;
            for(let index=0; index<this.nodeCnt-1; index++){
                nodePointer = nodePointer[1];
            }

            nodePointer[1] = newNode;
            this.nodeCnt++;
        }
    }

    /**
     * @param {number} index 
     * @param {number} val
     */
    addAtIndex(index, val) {
        let newNode = [];
        newNode[0] = val;
        newNode[1] = null;

        if((index < 0) || (index > this.nodeCnt)){
            return -1;
        }

        if(index === 0){
            aadAtHead(val);
        }
        else if(index === this.nodeCnt){
            addAtTail(val);
        }
        else{
            let nodePointer = this.header;
            for(let listIndex=0; listIndex<index-1; listIndex++){
                nodePointer = nodePointer[1];
            }

            newNode[1] = nodePointer[1];
            nodePointer[1] = newNode;
            this.nodeCnt++;
        }
    }

    /**
     * @param {number} index
     */
    deleteAtIndex(index) {
        if((index < 0) || (index >= this.nodeCnt)){
            return -1;
        }

        if(index === 0){
            this.header = this.header[1][1];
        }
        else{
            let nodePointer = this.header
            for(let listIndex=0; listIndex<index-1; listIndex++){
                nodePointer = nodePointer[1];
            }

            nodePointer[1] = nodePointer[1][1];
        }

        this.nodeCnt--;
    }
}

let linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);        // linked list는 1->2->3 가 됩니다.
let result1 = linkedList.get(1);     // returns 2
linkedList.deleteAtIndex(1);        // linked list는 이제 1->3
let result2 = linkedList.get(1);     // returns 3