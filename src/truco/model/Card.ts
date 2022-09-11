export default class Card {
    private _img: string;
    private _naipe: Naipe;
    private _number: number;
    
    constructor(number: number, naipe: Naipe) {
        this._naipe = naipe;
        this._number = number;
        this._img = this.getImage();
    }

    public get naipe(): Naipe {
        return this._naipe;
    }
    public set naipe(value: Naipe) {
        this._naipe = value;
    }

    public get img(): string {
        return this._img;
    }
    
    public set img(value: string) {
        this._img = value;
    }

    public get number(): number {
        return this._number;
    }
    public set number(value: number) {
        this._number = value;
    }

    public getImage() {
        return `${this.number}_${this.naipe}.png`
    }
}



export enum Naipe {
    PAUS = "paus",
    COPAS = "copas",
    ESPADAS = "espadas",
    MOLES = "moles"
}