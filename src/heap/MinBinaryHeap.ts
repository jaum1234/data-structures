import { BinaryHeap } from "./BinaryHeap";
import MaxBinaryHeap from "./MaxBinaryHeap";

export default class MinBinaryHeap<T> extends BinaryHeap<T>
{
    constructor()
    {
        super();
    }

    public convertToMinHeap = (maxHeap: MaxBinaryHeap<T>): MinBinaryHeap<T> => {
        if (maxHeap.isEmpty()) {
            return this;
        }

        const maxHeapNodes = maxHeap.getNodes();
        const maxHeapSize = maxHeap.getSize();

        const data: T = maxHeapNodes[maxHeapSize];
        maxHeap.setSize(maxHeapSize - 1);

        this.insert(data);

        return this.convertToMinHeap(maxHeap);
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

        if (!this.hasLeftChild(nodeIndex)) {
            return;
        }

        const leftChild: T = this.getLeftChild(nodeIndex);
        const leftChildIndex: number = this.getLeftChildIndex(nodeIndex);

        let lowerChild: T = leftChild;
        let lowerChildIndex: number = leftChildIndex;

        if (this.hasRightChild(nodeIndex) && this.getRightChild(nodeIndex) > leftChild) { 
            lowerChildIndex = this.getRightChildIndex(nodeIndex);;
            lowerChild = this.getRightChild(nodeIndex);
        }

        if (node < lowerChild) {
            return;
        }

        this.swap(nodeIndex, lowerChildIndex);

        this.heapfyDown(lowerChildIndex);
    }

}




