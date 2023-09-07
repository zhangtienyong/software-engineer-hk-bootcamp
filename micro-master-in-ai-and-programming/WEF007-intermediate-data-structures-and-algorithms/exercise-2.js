function createTreeNode(value) {
    return {
        value: value,
        left: null,
        right: null,
    };
}

function createBinarySearchTree(value) {
    const root = createTreeNode(value);

    return Object.freeze({
        getRoot: () => root,
        add: (value) => {
            const newNode = createTreeNode(value);
            if (root === null) {
                root = newNode;
                return;
            }

            const run = (cur) => {
                const direction = newNode.value > cur.value ? "right" : "left";
                if (cur[direction]) {
                    run(cur[direction]);
                } else {
                    cur[direction] = newNode;
                }
            };
            run(root);
        },
    });
}

function sortBinarySearchTree(tree1, tree2) {
    const arrayOfTree = [];

    function inOrder(node) {
        if (node) {
            inOrder(node.left);
            arrayOfTree.push(node.value);
            inOrder(node.right);
        }
    }

    inOrder(tree1.getRoot());
    inOrder(tree2.getRoot());
    arrayOfTree.sort((a, b) => a - b);
    return arrayOfTree;
}

// Example usage
const binarySearchTree1 = createBinarySearchTree(8);
binarySearchTree1.add(3);
binarySearchTree1.add(1);
binarySearchTree1.add(6);
binarySearchTree1.add(4);

const binarySearchTree2 = createBinarySearchTree(12);
binarySearchTree2.add(7);
binarySearchTree2.add(10);
binarySearchTree2.add(14);
binarySearchTree2.add(13);

const mergedArray = sortBinarySearchTree(binarySearchTree1, binarySearchTree2);
console.log(mergedArray);