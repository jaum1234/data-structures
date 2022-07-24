export default class LinkedList<T>
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
        return this.removeRecursively(data, this.firstElo, null);
    }

    private removeRecursively = (
        data: T, 
        currentElo: Elo<T> | null, 
        previousElo: Elo<T> | null
    ): T => {

        if (currentElo === null) {
            throw new Error("You are trying to remove an item that does not exist in the list.");
        }

        if (data === currentElo?.data) {

            if (currentElo === this.firstElo) {
                this.firstElo = currentElo.next;
            } else {
                previousElo!.next = currentElo.next;
            }

            this.size--;

            return data;
        }

        return this.removeRecursively(data, currentElo!.next, currentElo);
    }

    public get = (data: T): T => {
        return this.getRecursively(data, this.firstElo);
    }

    private getRecursively = (data: T, currentElo: Elo<T> | null): T => {
        if (currentElo === null) {
            throw new Error("That element that your looking for does not exist in the list.")
        }

        if (data === currentElo.data) {
            return data;
        }

        return this.getRecursively(data, currentElo.next);
    }

    public print = (): void => {
        this.printRecursively(this.firstElo);
    }

    private printRecursively = (currentElo: Elo<T> | null): void => {
        if (this.isEmpty()) {
            throw new Error("Cannot print list because it is empty.");
        }

        if (currentElo === null) {
            process.stdout.write('\n')
            return;
        }

        process.stdout.write(currentElo?.data + '');

        if (!this.isLastElo(currentElo)) {
            process.stdout.write("->");
        }

        this.printRecursively(currentElo.next);
    }

    public isEmpty = (): boolean => {
        return this.size === 0;
    }

    private isLastElo = (elo: Elo<T>): boolean => {
        return elo.next === null;
    }
    
}

class Elo<T>
{
    public next: Elo<T> | null;
    public data: T;

    constructor(data: T)
    {
        this.next = null;
        this.data = data;
    }
}


