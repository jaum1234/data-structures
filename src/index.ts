// import { BinaryTree } from './binary_tree';
import BinarySearchTree from './binary_search_tree/BinarySearchTree';
import BinaryTree from './binary_tree/BinaryTree';
import { BinaryHeap } from './heap/BinaryHeap';
import MaxBinaryHeap from './heap/MaxBinaryHeap';
import MinBinaryHeap from './heap/MinBinaryHeap';

const bst: BinarySearchTree<number> = new BinarySearchTree();

bst.insert(10);
bst.insert(7);
bst.insert(20);
bst.insert(1);

bst.printInOrder();

// import LinkedList from "./list/LinkedList";

// const linkedList: LinkedList<number> = new LinkedList();

// linkedList.add(5);
// linkedList.add(1);
// linkedList.add(3);

// linkedList.print();
// try {

    // const maxHeap: BinaryHeap<number> = HeapFactory.build<number>("max");
    
    // //const maxHeap: MaxBinaryHeap<number> = new MaxBinaryHeap();

    // maxHeap.insert(5);
    // maxHeap.insert(4);
    // maxHeap.insert(7);
    // maxHeap.insert(2);
    // maxHeap.insert(3);
    // maxHeap.insert(1);
 
    // maxHeap.print();

    // maxHeap.remove(2);

    // maxHeap.print();

    // const minHeap: MinBinaryHeap<number> = new MinBinaryHeap();

    // minHeap.insert(5);
    // minHeap.insert(4);
    // minHeap.insert(7);
    // minHeap.insert(2);
    // minHeap.insert(3);
    // minHeap.insert(1);
 
    // minHeap.print();

    // maxHeap.convertToMaxHeap(minHeap);

    // maxHeap.print();



   
    // const root = new BinaryTree<number>(1);

    // const leftChild1 = new BinaryTree<number>(2);
    // const leftChild2 = new BinaryTree<number>(4);
    // const rightChild3= new BinaryTree<number>(5);
    // const rightChild1 = new BinaryTree<number>(3);
    // const rightChild4 = new BinaryTree<number>(6);
    
    // root.appendLeftChild(leftChild1);
    // root.appendRightChild(rightChild1);
    
    // leftChild1.appendLeftChild(leftChild2);
    // leftChild1.appendRightChild(rightChild3);
    
    // rightChild1.appendLeftChild(rightChild4);


    // root.printInPreOrder();

    // root.changeRoot(4);

    // leftChild2.printInPreOrder();

    // maxHeap.turnToMaxHeap(root);

    //maxHeap.print();

    //const tree: Array<number> = [0, 10, 6, 5, 3, 2, 4];

    //console.log(maxHeap.isValidHeap(tree));
    
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
