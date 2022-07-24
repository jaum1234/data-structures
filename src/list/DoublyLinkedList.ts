export default class DoublyLinkedList<T> 
{
    private firstElo: Elo<T> | null;
    private size: number;

    constructor()
    {
        this.firstElo = null;
        this.size = 0;
    }

    public add = (data: T): void => {
        const newElo: Elo<T> = new Elo(data);

        newElo.next = this.firstElo;
        this.firstElo = newElo;

        this.size++;
    }

    public remove = (data: T): T => {
        return this.removeRecursively(data, this.firstElo);
    }

    private removeRecursively = (data: T, currentElo: Elo<T> | null): T => {

        if (currentElo === null) {
            throw new Error("Cannot remove an element that is not in the list.");
        }

        if (data === currentElo.data) {

            if (currentElo === this.firstElo) {
                this.firstElo = currentElo.next;
            } else {
                currentElo.previous = currentElo.next;
            }

            return data;
        }

        return this.removeRecursively(data, currentElo.next);
    }

    public isEmpty = (): boolean => {
        return this.size === 0;
    }
}

class Elo<T>
{
    public data: T;
    public next: Elo<T> | null;
    public previous: Elo<T> | null;

    constructor(data: T)
    {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}