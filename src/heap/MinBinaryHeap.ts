import { BinaryHeap } from "./BinaryHeap";

export default class MinBinaryHeap<T> extends BinaryHeap<T>
{
    constructor()
    {
        super();
    }

    protected heapfyUp = (nodeIndex: number): void => {

        const node: T = this.nodes[nodeIndex];
        const parent: T = this.getParent(nodeIndex);

        if (!this.hasParent(nodeIndex) || node > parent) {
            return;
        }

        const parentIndex: number = this.getParentIndex(nodeIndex);

        this.swap(nodeIndex, parentIndex);
        this.heapfyUp(parentIndex);
    }

    protected heapfyDown = (nodeIndex: number): void => {
        const node: T = this.nodes[nodeIndex];

        if (this.isLeaf(nodeIndex)) {
            return;
        }

        const leftChild: T = this.getLeftChild(nodeIndex);
        const leftChildIndex: number = this.getLeftChildIndex(nodeIndex);

        let child: T = leftChild;
        let childIndex: number = leftChildIndex;

        let rightChild: T;
        let rightChildIndex: number;

        if (this.hasRightChild(nodeIndex)) {
            rightChildIndex  = this.getRightChildIndex(nodeIndex);
            rightChild = this.getRightChild(nodeIndex);

            childIndex = rightChild < leftChild ? rightChildIndex : leftChildIndex;
            child = rightChild < leftChild ? rightChild : leftChild;
        }

        if (node <  child) {
            return;
        }

        this.swap(nodeIndex, childIndex);

        this.heapfyDown(childIndex);
    }
}




