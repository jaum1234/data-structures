abstract class BinaryHeap<T>
{
    protected nodes: Array<T>;
    protected size: number;

    constructor() {
        this.size = 0;
        this.nodes = new Array();
    }

    protected abstract heapfyUp(nodeIndex: number): void;

    protected abstract heapfyDown(nodeIndex: number): void;

    public insert = (data: T): void => {
        this.size++;

       this.nodes[this.size] = data;

       const newNodeIndex: number = this.size;

       this.heapfyUp(newNodeIndex);
    }

    public removePeak = (): T => {
        const lastAddedLeaf: T = this.nodes[this.size];
        const peak: T = this.nodes[1];

        this.nodes[1] = lastAddedLeaf;

        this.size--;

        this.heapfyDown(1);

        return peak;
    }

    public peak = (): T => {
        if (this.isEmpty()) throw new Error("Heap is empty");

        return this.nodes[1];
    }

    protected swap = (firstIndex: number, secondIndex: number): void => {
        const firstNode: T = this.nodes[firstIndex];

        this.nodes[firstIndex] = this.nodes[secondIndex];
        this.nodes[secondIndex] = firstNode;
    }

    public isEmpty = (): boolean => {
        return this.size === 0;
    }

    public print = (): void => {
        const currentNodeIndex = 1;
        this.printRecursively(currentNodeIndex);
    }

    private printRecursively = (nodeIndex: number): void => {
        process.stdout.write(this.nodes[nodeIndex] + ' ');

        if (nodeIndex === this.size) {
            process.stdout.write('\n');
            return;
        }

        this.printRecursively(++nodeIndex);
    }

    protected hasParent = (nodeIndex: number): boolean => {
        return Math.floor(nodeIndex/2) !== 0;
    }

    protected getParent = (nodeIndex: number): T => {
        const parentIndex = Math.floor(nodeIndex/2);
        return this.nodes[parentIndex];
    }

    protected getParentIndex = (nodeIndex: number): number => {
        return Math.floor(nodeIndex/2);
    }

    protected getLeftChild = (nodeIndex: number): T => {
        const leftChildIndex = nodeIndex*2;
        return this.nodes[leftChildIndex];
    }

    protected getLeftChildIndex = (nodeIndex: number): number => {
        return nodeIndex*2;
    }

    protected getRightChild = (nodeIndex: number): T => {
        const rightChildIndex = nodeIndex*2 + 1;
        return this.nodes[rightChildIndex];
    }

    protected getRightChildIndex = (nodeIndex: number): number => {
        return nodeIndex*2 + 1;
    }

    protected isLeaf = (nodeIndex: number): boolean => {
        return nodeIndex*2 >= this.size && nodeIndex*2 + 1 > this.size;
    }

    protected hasLeftChild = (nodeIndex: number): boolean => {
        return nodeIndex*2  <= this.size; 
    }

    protected hasRightChild = (nodeIndex: number): boolean => {
        return nodeIndex*2 + 1 <= this.size;
    }
}

export { BinaryHeap };