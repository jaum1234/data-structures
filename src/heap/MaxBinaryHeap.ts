import BinaryTree from "../binary_tree/BinaryTree";
import { BinaryHeap } from "./BinaryHeap";
import MinBinaryHeap from "./MinBinaryHeap";

export default class MaxBinaryHeap<T> extends BinaryHeap<T>
{
    constructor() {
        super();
    }

    public convertToMaxHeap = (minHeap: MinBinaryHeap<T>): MaxBinaryHeap<T> => {
        if (minHeap.isEmpty()) {
            return this;
        }

        const minHeapNodes: Array<T> = minHeap.getNodes();
        const minHeapSize: number = minHeap.getSize();

        const data: T = minHeapNodes[minHeapSize];
        minHeap.setSize(minHeapSize - 1);

        this.insert(data);

        return this.convertToMaxHeap(minHeap);
    }

    protected heapfyUp = (nodeIndex: number): void => {

        const node: T = this.nodes[nodeIndex];
        const parent: T = this.getParent(nodeIndex);

        if (!this.hasParent(nodeIndex) || node <= parent) {
            return;
        }

        const parentIndex: number = this.getParentIndex(nodeIndex);

        this.swap(nodeIndex, parentIndex);
        this.heapfyUp(parentIndex);
    }

    protected heapfyDown = (nodeIndex: number): void => {
        const node: T = this.nodes[nodeIndex];

        if (!this.hasLeftChild(nodeIndex)) {
            return;
        }

        const leftChild: T = this.getLeftChild(nodeIndex);
        const leftChildIndex: number = this.getLeftChildIndex(nodeIndex);

        let higherChild: T = leftChild;
        let higherChildIndex: number = leftChildIndex;

        if (this.hasRightChild(nodeIndex) && this.getRightChild(nodeIndex) > leftChild) {
            higherChildIndex = this.getRightChildIndex(nodeIndex);
            higherChild = this.getRightChild(nodeIndex);
        }

        if (node > higherChild) {
            return;
        }

        this.swap(nodeIndex, higherChildIndex);

        this.heapfyDown(higherChildIndex);
    }
}
