// How to create a binary search tree and merge two trees together to a sorted array.
// [1, 3, 4, 6, 8]
// [1, 7, 10, 12, 14]
// [1, 3, 4, 6, 7, 8, 10, 12, 14]

function createTreeNode(value) {
    return {
        value: value,
        left: null,
        right: null,
    };
};

function createBinarySearchTree(value) {
    let root = createTreeNode(value);

    return Object.freeze({
        getRoot: () => root,
        add: (value) => {
            const newNode = createTreeNode(value);
            if (root === null) {
                root = newNode;
                return;
            };

            const run = (cur) => {
                const direction = newNode.value > cur.value ? "right": "left";
                if (cur[direction]) {
                    run(cur[direction]);
                } else {
                    cur[direction] = newNode;
                }
            };
            run(root);
        },
    });
};

const binarySearchTree = createBinarySearchTree(8);
binarySearchTree.add(3);
binarySearchTree.add(1);
binarySearchTree.add(6);
binarySearchTree.add(4);
binarySearchTree.add(10);

console.log(binarySearchTree.getRoot().value);
console.log(binarySearchTree.getRoot().left.value);
console.log(binarySearchTree.getRoot().left.left.value);
console.log(binarySearchTree.getRoot().left.right.value);
console.log(binarySearchTree.getRoot().right.value);

