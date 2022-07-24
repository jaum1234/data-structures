export default class BinaryTree<T>
{
    private leftChild: BinaryTree<T> | null | undefined;
    private rightChild: BinaryTree<T> | null | undefined;
    private data: T;

    public constructor(data: T)
    {
        this.leftChild = null;
        this.rightChild = null;
        this.data = data;
    }

    public appendLeftChild = (node: BinaryTree<T>): void => {
        this.leftChild = node;
    }

    public appendRightChild = (node: BinaryTree<T>): void => {
        this.rightChild = node;
    }

    public printInPreOrder = (): void => {
        
        process.stdout.write('<' + this.data);

        if (this.hasLeftChild()) {
            this.leftChild?.printInPreOrder();
        }

        if (this.hasRightChild()) {
            this.rightChild?.printInPreOrder();
        }

        process.stdout.write('>');
    }

    public printInOrder = (): void => {

        process.stdout.write('<')

        if (this.hasLeftChild()) {
            this.leftChild?.printInOrder();
        }

        process.stdout.write(this.data + '');

        if (this.hasRightChild()) {
            this.rightChild?.printInOrder();
        }

        process.stdout.write('>');
    }

    public printInPostOrder = (): void => {

        process.stdout.write('<')

        if (this.hasLeftChild()) {
            this.leftChild?.printInPostOrder();
        }

        if (this.hasRightChild()) {
            this.rightChild?.printInPostOrder();
        }

        process.stdout.write(this.data + '>');
    }

    public delete = (data: T): BinaryTree<T> | null => {
        return this.deleteNode(data, null);
    }

    private deleteNode = (data: T, parentNode: BinaryTree<T> | null): BinaryTree<T> | null => {

        if (this.data === data) {

            if (this.isLeaf()) {
                if (this.isLeftChildOf(parentNode)) {
                    parentNode!.leftChild = null;
                } else {
                    parentNode!.rightChild = null;
                }

                return this;
            } 

            const removedLeaf = this.removeFirstLeafFound();
            removedLeaf!.leftChild = this.leftChild;
            removedLeaf!.rightChild = this.rightChild;

            if (parentNode) {
                if (this.isLeftChildOf(parentNode)) {
                    parentNode.leftChild = removedLeaf;
                } else {
                    parentNode.rightChild = removedLeaf;
                }
            }
            this.rightChild = null
            this.leftChild = null;
            
            return this;
        }

        let removedNode: BinaryTree<T> | null | undefined;

        if (this.hasLeftChild()) {
            removedNode = this.leftChild?.deleteNode(data, this);

            if (removedNode) return removedNode;
        }

        if (this.hasRightChild()) {
            removedNode = this.rightChild?.deleteNode(data, this);

            if (removedNode) return removedNode;
        }

        return null;
    }

    public removeFirstLeafFound = (): BinaryTree<T> | null=> {
        return this.removeFirstLeaf(null);
    }

    private removeFirstLeaf = (parentNode: BinaryTree<T> | null): BinaryTree<T> | null => {
        let removedLeaf: BinaryTree<T> | null | undefined;

        if (this.isLeaf() && parentNode) {
            
            if (this.isLeftChildOf(parentNode)) {
                parentNode.leftChild = null;
            } else {
                parentNode.rightChild = null;
            }

            return this;    
        }

        if (this.hasLeftChild()) {
            removedLeaf = this.leftChild?.removeFirstLeaf(this);

            if (removedLeaf) return removedLeaf;
        }

        if (this.hasRightChild()) {
            removedLeaf = this.rightChild?.removeFirstLeaf(this);
            
            if (removedLeaf) return removedLeaf;
        }

        return null;
    }

    public search = (data: T): BinaryTree<T> | null | undefined => {
        if (this.data === data) {
            return this;
        }

        let node: BinaryTree<T> | null | undefined;

        if (this.hasLeftChild()) {
            node = this.leftChild?.search(data);

            if (node !== null) {
                return node;
            }
        }

        if (this.hasRightChild()) {
            node = this.rightChild?.search(data);

            if (node !== null) {
                return node;
            }
        }

        return null;
    }

    public changeRoot = (newRoot: T): void => {
        this.changeRootTo(newRoot, this, null);
    }

    private changeRootTo = (
        newRoot: T, 
        initalRoot: BinaryTree<T>,
        parentNode: BinaryTree<T> | null
    ): BinaryTree<T> | null => {

        if (this === initalRoot) {
            throw new Error("That's already your current root.");
        }

        if (this.data === newRoot) {

            const currentNodeLeftChild = this.leftChild;
            const currentNodeRightChild = this.rightChild;

            if (!this.isLeftChildOf(initalRoot) && !this.isRightChildOf(initalRoot)) {

                this.leftChild = initalRoot.leftChild;
                this.rightChild = initalRoot.rightChild;

                initalRoot.leftChild = currentNodeLeftChild;
                initalRoot.rightChild = currentNodeRightChild;

                if (this.isLeftChildOf(parentNode)) {
                    parentNode!.leftChild = initalRoot;
                } else {
                    parentNode!.rightChild = initalRoot;
                }

                return this;
            }

            if (this.isLeftChildOf(initalRoot)) {
                this.leftChild = initalRoot;
                this.rightChild = initalRoot.rightChild;
            } else {
                this.rightChild = initalRoot;
                this.leftChild = initalRoot.leftChild;
            }

            initalRoot.leftChild = currentNodeLeftChild;
            initalRoot.rightChild = currentNodeRightChild;

            return this;
        }

        let node: BinaryTree<T> | null | undefined;

        if (this.hasLeftChild()) {
            node = this.leftChild?.changeRootTo(newRoot, initalRoot, this);

            if (node) return node;
        }

        if (this.hasRightChild()) {
            node = this.rightChild?.changeRootTo(newRoot, initalRoot, this);

            if (node) return node;
        }

        return null;
    }

    public isLeaf = () => {
        return this.leftChild == null && this.rightChild == null;
    }

    public hasLeftChild = (): boolean => {
        return this.leftChild != null;
    }

    public hasRightChild = (): boolean => {
        return this.rightChild !== null;
    }

    public isLeftChildOf = (node: BinaryTree<T> | null): boolean => {
        return node?.leftChild === this;
    }

    public isRightChildOf = (node: BinaryTree<T> | null): boolean => {
        return node?.rightChild === this;
    }
}
