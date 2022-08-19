export default class BinarySearchTree<T>
{
    private root: Elo<T> | null;

    public constructor()
    {
        this.root = null;
    }

    public search = (value: T) => {
        this.searchRecursively(value, this.root);
    }

    private searchRecursively = (value: T, currentNode: Elo<T> | null): T | null => {
        if (currentNode === null) return null;

        let searchedValue: T | null;
        
        if (value < currentNode.value) {

            searchedValue = this.searchRecursively(value, currentNode.leftChild);
            if (searchedValue) return searchedValue;

        } else if (value > currentNode.value) {

            searchedValue = this.searchRecursively(value, currentNode.rightChild);
            if (searchedValue) return searchedValue;

        } 

        return currentNode.value;
    }

    public insert = (value: T): void => {
        if (this.root === null) {
            this.root = new Elo(value);
            return;
        }

        this.insertRecursively(value, this.root);
    }

    private insertRecursively = (value: T, currentNode: Elo<T> | null): Elo<T> | null => {

        if (currentNode === null) return new Elo(value);

        let insertedNode: Elo<T> | null = null;

        if (value < currentNode.value) {
            insertedNode = this.insertRecursively(value, currentNode.leftChild);
            currentNode.rightChild = insertedNode;
        } else if (value > currentNode.value) {
            insertedNode = this.insertRecursively(value, currentNode.rightChild);
            currentNode.leftChild = insertedNode;
        }

        return currentNode;
    }

    public printInOrder = (): void => {
        this.printInOrderRecursively(this.root);
    }

    private printInOrderRecursively = (currentNode: Elo<T> | null): void => {
        process.stdout.write("<")

        if (this.hasLeftChild(currentNode)) {
            this.printInOrderRecursively(currentNode!.leftChild);
        }

        process.stdout.write(currentNode!.value + "");

        if (this.hasRightChild(currentNode)) {
            this.printInOrderRecursively(currentNode!.rightChild);
        }

        process.stdout.write(">")
    }

    private hasLeftChild = (node: Elo<T> | null): boolean => {
        return node?.leftChild != null;
    }

    private hasRightChild = (node: Elo<T> | null): boolean => {
        return node?.rightChild != null;
    }
}

class Elo<T>
{
    public value: T;
    public leftChild: Elo<T> | null;
    public rightChild: Elo<T> | null;

    public constructor(value: T)
    {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}