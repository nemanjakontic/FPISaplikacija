

export class Uplatnica {
    uplatnicaId: string;
    datumUplate: string;
    iznos: number;
    clanID: string;

    constructor(uplatnicaId: string, datumUplate: string, iznos: number, clanID: string) {
        this.uplatnicaId = uplatnicaId;
        this.datumUplate = datumUplate;
        this.iznos = iznos;
        this.clanID = clanID;
    }
}
