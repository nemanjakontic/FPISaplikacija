export class Clan {
    clanId: string;
    ime: string;
    prezime: string;
    datumRodjenja: string;
    slika: string

    constructor(clanId: string, ime: string, prezime: string, datumRodjenja: string, slika: string) {
        this.clanId = clanId;
        this.ime = ime;
        this.prezime = prezime;
        this.datumRodjenja = datumRodjenja;
        this.slika = slika;
    }
}
