function Node(value) {
    return {
      nodeValue: value,
      nextNode: null
    };
  }
  
  function createLinkedList() {
    let head = null;
    let tail = null;
  
    return {
      addNode: (value) => {
        const newNode = Node(value);
        if (!head) {
          head = newNode;
          tail = newNode;
        } else {
          tail.nextNode = newNode;
          tail = newNode;
        }
      },
      displayValue: () => {
        if (head === null) {
          console.log("This linked list is empty.");
        } else {
          let currentNode = head;
          let value = "";
          while (currentNode !== null) {
            value += currentNode.nodeValue;
            currentNode = currentNode.nextNode;
          }
          console.log(value);
        }
      },
      add: (otherList) => {
        let carry = 0;
        let result = createLinkedList();
  
        let nodeA = head;
        let nodeB = otherList.head;
  
        while (nodeA !== null || nodeB !== null) {
          let sum = carry;
  
          if (nodeA !== null) {
            sum += nodeA.nodeValue;
            nodeA = nodeA.nextNode;
          }
          if (nodeB !== null) {
            sum += nodeB.nodeValue;
            nodeB = nodeB.nextNode;
          }
  
          carry = Math.floor(sum / 10);
          result.addNode(sum % 10);
        }
  
        if (carry > 0) {
          result.addNode(carry);
        }
  
        return result;
      }
    };
  }
  
  const numberA = createLinkedList();
  numberA.addNode(2);
  numberA.addNode(5);
  
  const numberB = createLinkedList();
  numberB.addNode(1);
  numberB.addNode(0);
  numberB.addNode(0);
  
  const result = numberA.add(numberB);
  result.displayValue(); // Output: 125