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
        addNewNode: (value) => {
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
        displayAllNodeValues: () => {},
        displayMiddleNodeValue: () => {},
    });
};

const linkedList = singlyLinkedList();
linkedList.addNewNode(10);
linkedList.addNewNode(9);
linkedList.addNewNode(8);
linkedList.addNewNode(7);
linkedList.addNewNode(6);
