class BinaryTree<T>
{
    private leftChild: BinaryTree<T> | null;
    private rightChild: BinaryTree<T> | null;
    private data: T;

    public constructor(data: T)
    {
        this.leftChild = null;
        this.rightChild = null;
        this.data = data;
    }

    public appendLeftChild = (node: BinaryTree<T>) => {
        this.leftChild = node;
    }

    public appendRightChild = (node: BinaryTree<T>) => {
        this.rightChild = node;
    }
}