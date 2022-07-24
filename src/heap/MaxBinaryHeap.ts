import { BinaryHeap } from "./BinaryHeap";

class MaxBinaryHeap<T> extends BinaryHeap<T>
{
    constructor() {
        super();
    }

    public insert = (): void => {
       
    }

    public remove = (): void => {

    }

    public heapfyUp = (nodeIndex: number): void => {
        const node: T = this.nodes[nodeIndex];

        const parentIndex = this.getParentIndex(nodeIndex);
        const parent: T = this.getParent(nodeIndex);

        if (node < parent) {
            return;
        }

        this.swap(nodeIndex, parentIndex);
        this.heapfyUp(parentIndex);
    }

    public heapfyDown = (nodeIndex: number): void => {
        const node: T = this.nodes[nodeIndex];

    }
}