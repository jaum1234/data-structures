class Stack<T>
{
    private peak: number;
    private items: Array<T>;

    constructor()
    {
        this.peak = 0;
        this.items = new Array();
    }

    public insert = (data: T): void => {
        this.items[this.peak] = data;
        this.peak++;
    }

    public remove = () => {
        if (this.isEmpty()) throw new Error("Cannot remove a item because the stack is empty");

        const removedItem: T = this.items[this.peak];

        this.peak--;

        return removedItem;
    }

    public isEmpty = (): boolean => {
        return this.peak === 0;
    }

    public getPeak = (): T => {
        return this.items[this.peak];
    }
}