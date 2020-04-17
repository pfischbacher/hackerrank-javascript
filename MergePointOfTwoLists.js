function findMergeNode(headA, headB) {
  let result = null;
  let listA = headA;
  while (listA) {
    let listB = headB;
    while (listB) {
      if (listA && listB && listA === listB) {
        return listA.data;
      }
      listB = listB.next;
    }
    listA = listA.next;
  }
  return result;
}
