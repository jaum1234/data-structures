import { BinaryHeap } from "./BinaryHeap";

class MaxBinaryHeap<T> extends BinaryHeap<T>
{
    constructor() {
        super();
    }

    // public insert = (data: T): void => {
    //    this.size++;

    //    this.nodes[this.size] = data;

    //    const newNodeIndex: number = this.size;

    //    this.heapfyUp(newNodeIndex);
    // }

    // public removeMax = (): T => {

    //     const lastAddedLeaf: T = this.nodes[this.size];
    //     const maxNode: T = this.nodes[1];

    //     this.nodes[1] = lastAddedLeaf;

    //     this.size--;

    //     this.heapfyDown(1);

    //     return maxNode;
    // }

    protected heapfyUp = (nodeIndex: number): void => {

        const node: T = this.nodes[nodeIndex];
        const parent: T = this.getParent(nodeIndex);

        if (!this.hasParent(nodeIndex) || node < parent) {
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

            childIndex = rightChild > leftChild ? rightChildIndex : leftChildIndex;
            child = rightChild > leftChild ? rightChild : leftChild;
        }

        if (node >  child) {
            return;
        }

        this.swap(nodeIndex, childIndex);

        this.heapfyDown(childIndex);
    }
}

export { MaxBinaryHeap };