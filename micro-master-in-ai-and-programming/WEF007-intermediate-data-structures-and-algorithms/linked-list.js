function cons(value, next) {
    return {
      value,
      next,
    };
  }

const head = cons(1, cons(2, cons(3, null)));

function getIndexAt(head, index) {
    let i = 0;
    let item = head;

    while (i < index) {
        if (!item.next) {
            throw new Error("No items at index " + index);
        }
        item = item.next;
        i++;
    }
    return item;
}

console.log(getIndexAt(head, 2));
const newHead = cons(0, head);
getIndexAt(newHead, 2).next = null;
