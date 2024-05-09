export interface Ioni {
    nimetus: string;
    aatommassideSumma: number;
    loeng: number;
}

export class Ioon implements Ioni {
    constructor(public nimetus: string, public aatommassideSumma: number, public loeng: number) {}
}