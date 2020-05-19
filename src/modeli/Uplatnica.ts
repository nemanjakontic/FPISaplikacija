import {Clan} from "./Clan";

export class Uplatnica {
    uplatnicaId: string;
    datumUplate: string;
    iznos: number;
    clan: Clan;

    constructor(uplatnicaId: string, datumUplate: string, iznos: number, clan: Clan) {
        this.uplatnicaId = uplatnicaId;
        this.datumUplate = datumUplate;
        this.iznos = iznos;
        this.clan = clan;
    }
}
