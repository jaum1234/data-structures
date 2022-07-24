// import { BinaryTree } from './binary_tree';
// import { MaxBinaryHeap } from './heap';
// import { MinBinaryHeap } from './heap';

import LinkedList from "./list/LinkedList";

const linkedList: LinkedList<number> = new LinkedList();

linkedList.add(5);
linkedList.add(1);
linkedList.add(3);

linkedList.print();
// try {
    
//     const maxHeap: MaxBinaryHeap<number> = new MaxBinaryHeap();

//     maxHeap.insert(5);
//     maxHeap.insert(4);
//     maxHeap.insert(7);
//     maxHeap.insert(2);
//     maxHeap.insert(3);
//     maxHeap.insert(1);
 
//     maxHeap.print();

//     maxHeap.removePeak();

//     maxHeap.print();

//     maxHeap.removePeak();

//     maxHeap.print();

//     const minHeap: MinBinaryHeap<number> = new MinBinaryHeap();

//     minHeap.insert(5);
//     minHeap.insert(4);
//     minHeap.insert(7);
//     minHeap.insert(2);
//     minHeap.insert(3);
//     minHeap.insert(1);
 
//     minHeap.print();

//     minHeap.removePeak();

//     minHeap.print();

//     minHeap.removePeak();

//     minHeap.print();
//     // const root = new BinaryTree<number>(1);

//     // const leftChild1 = new BinaryTree<number>(2);
//     // const leftChild2 = new BinaryTree<number>(4);
//     // const rightChild3= new BinaryTree<number>(5);
//     // const rightChild1 = new BinaryTree<number>(3);
//     // const rightChild4 = new BinaryTree<number>(6);
    
//     // root.appendLeftChild(leftChild1);
//     // root.appendRightChild(rightChild1);
    
//     // leftChild1.appendLeftChild(leftChild2);
//     // leftChild1.appendRightChild(rightChild3);
    
//     // rightChild1.appendRightChild(rightChild4);
    
//     // root.printInPreOrder();
//     // process.stdout.write('\n');
//     // root.printInOrder();
//     // process.stdout.write('\n');
//     // root.printInPostOrder();
//     // process.stdout.write('\n');
    
//     // root.changeRoot(1);
    
//     // leftChild1.printInPreOrder();
//     // process.stdout.write('\n');
// } catch (e: any) {
//     console.log(e);
// }
