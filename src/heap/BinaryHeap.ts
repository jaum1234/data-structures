abstract class BinaryHeap<T>
{
    protected nodes: Array<T>;
    protected size: number;

    constructor() {
        this.size = 0;
        this.nodes = new Array();
    }

    abstract insert(data: T): void;

    abstract remove(data: T): void;

    abstract heapfyUp(nodeIndex: number): void;

    abstract heapfyDown(nodeIndex: number): void;

    public peak = (): T => {
        return this.nodes[1];
    }

    public swap = (firstIndex: number, secondIndex: number): void => {
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
            return;
        }

        this.printRecursively(++nodeIndex);
    }

    public getParent = (nodeIndex: number): T => {
        const parentIndex = nodeIndex/2;
        return this.nodes[parentIndex];
    }

    public getParentIndex = (nodeIndex: number): number => {
        return nodeIndex/2;
    }

    public getLeftChild = (nodeIndex: number): T => {
        const leftChildIndex = nodeIndex*2;
        return this.nodes[leftChildIndex];
    }

    public getLeftChildIndex = (nodeIndex: number): number => {
        return nodeIndex*2;
    }

    public getRightChild = (nodeIndex: number): T => {
        const rightChildIndex = nodeIndex*2 + 1;
        return this.nodes[rightChildIndex];
    }

    public getRightChildIndex = (nodeIndex: number): number => {
        return nodeIndex*2 + 1;
    }
}

export { BinaryHeap };