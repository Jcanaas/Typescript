class Pokemon {
    private nom: string;
    readonly class: string;


    constructor(nom: string) {
        this.nom = nom;
        this.class = "Pokemon"
    }

    get Nom():string{
        return this.nom;
    }

}