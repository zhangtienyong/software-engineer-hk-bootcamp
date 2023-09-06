// How to create a singly linked list and find the middle element of it.
// Create a node for the linked list.
function Node(value) {
    return {
        nodeValue: value,
        nextNode: null
    };
};

// Create a single linked list
function singlyLinkedList() {
    let head = null;
    let tail = null;

    return Object.freeze({
        insert: (value) => {
            const newNode = Node(value);
            if (!head) {
                head = newNode;
                tail = head;
            } else {
                tail.nextNode = newNode;
                tail = newNode;
            }
            return;
        },
        access: () => {
            if (head === null) {
                console.log("This linked list is empty.");
                return;
            } else {
                let currentNode = head;
                while (currentNode !== null) {
                    console.log(currentNode.nodeValue);
                    currentNode = currentNode.nextNode;
                }
            }
        },
        searchMiddleElement: () => {
            if (head === null) {
                console.log("This linked list is empty.");
                return;
            } else {
                let slowPointer = head;
                let fastPointer = head;
                while (fastPointer !== null && fastPointer.nextNode !== null) {
                    slowPointer = slowPointer.nextNode;
                    fastPointer = fastPointer.nextNode.nextNode;
                }
                console.log("Middle element:", slowPointer.nodeValue);
            }
        },
        delete: () => {},
    });
};

const linkedList = singlyLinkedList();
linkedList.insert(10);
linkedList.insert(9);
linkedList.insert(8);
linkedList.insert(7);
linkedList.insert(6);
linkedList.insert(5);
linkedList.access();
linkedList.searchMiddleElement();
