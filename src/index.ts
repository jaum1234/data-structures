import { BinaryTree } from './binary_tree';

try {
    const root = new BinaryTree<number>(1);

    const leftChild1 = new BinaryTree<number>(2);
    const leftChild2 = new BinaryTree<number>(4);
    const rightChild3= new BinaryTree<number>(5);
    const rightChild1 = new BinaryTree<number>(3);
    const rightChild4 = new BinaryTree<number>(6);
    
    root.appendLeftChild(leftChild1);
    root.appendRightChild(rightChild1);
    
    leftChild1.appendLeftChild(leftChild2);
    leftChild1.appendRightChild(rightChild3);
    
    rightChild1.appendRightChild(rightChild4);
    
    root.printInPreOrder();
    process.stdout.write('\n');
    root.printInOrder();
    process.stdout.write('\n');
    root.printInPostOrder();
    process.stdout.write('\n');
    
    root.changeRoot(1);
    
    leftChild1.printInPreOrder();
    process.stdout.write('\n');
} catch (e: any) {
    console.log(e);
}
