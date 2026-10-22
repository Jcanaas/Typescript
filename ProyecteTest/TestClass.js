"use strict";
class Pokemon {
    nom;
    class;
    constructor(nom) {
        this.nom = nom;
        this.class = "Pokemon";
    }
    get Nom() {
        return this.nom;
    }
}
