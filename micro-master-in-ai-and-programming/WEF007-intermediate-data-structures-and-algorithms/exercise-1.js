// How to create a singly linked list and find the middle element of it.
// Create a node for the linked list.
function createListNode(value) {
    return {
        value,
        next: null
    };
};

// Create a single linked list
function createSinglyLinkedList() {
    let head = null;
    return Object.freeze({
        // Insertion
        addNewNode: (value) => {
            const newNode = createListNode(value);
            if (head === null) {
                head = newNode;
                console.log("log node value: ", head.value);
                return head;
            }          
            // Set the lastNode.next to be the new node
            let current = head;
            while (current.next !== null) {
                current = current.next;
            }
            // Current now is the last node of the list
            current.next = newNode;
            return head;
        }
    });
};

// Insert new node value
console.log(createSinglyLinkedList().addNewNode("Add Value 'AA'"));
console.log(createSinglyLinkedList().addNewNode("Add Value 'BB'"));

