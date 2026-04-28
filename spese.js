
/**
 * @typedef {Object} Spesa
 * @property {number} id - Identificativo univoco della spesa.
 * @property {string} descrizione - Descrizione della spesa.
 * @property {number} importo - Importo in euro.
 * @property {string} categoria - Categoria della spesa.
 * @property {string} data - Data nel formato "YYYY-MM-DD".
 */

let nextId = 1;

let spese = [];


/**
 * Registra una nuova spesa nell'elenco.
 * @param {string} descrizione - Descrizione della spesa.
 * @param {number} importo - Importo positivo in euro.
 * @param {string} categoria - Categoria della spesa.
 * @param {string} data - Data della spesa.
 * @returns {void}
 */
function registraSpesa(descrizione, importo, categoria, data) {

    if (importo <= 0) {
        console.log("Errore: l'importo deve essere positivo.");
        return;
    }

    let nuovaSpesa = {
        id: nextId,
        descrizione: descrizione,
        importo: importo,
        categoria: categoria,
        data: data
    };

    nextId++;
    spese.push(nuovaSpesa);
    console.log("Spesa registrata!");
}


/**
 * Modifica una spesa esistente cercandola tramite il suo ID.
 * @param {number} id - ID della spesa da modificare.
 * @param {string} nuovaDescrizione - Nuova descrizione.
 * @param {number} nuovoImporto - Nuovo importo.
 * @param {string} nuovaCategoria - Nuova categoria.
 * @returns {void}
 */
function modificaSpesa(id, nuovaDescrizione, nuovoImporto, nuovaCategoria) {

    for (let i = 0; i < spese.length; i++) {
        if (spese[i].id === id) {
            spese[i].descrizione = nuovaDescrizione;
            spese[i].importo = nuovoImporto;
            spese[i].categoria = nuovaCategoria;
            console.log("Spesa modificata!");
            return;
        }
    }

    console.log("Spesa con ID " + id + " non trovata.");
}


/**
 * Stampa l'elenco di tutte le spese registrate.
 * @returns {void}
 */
function elencaSpese() {

    if (spese.length === 0) {
        console.log("Nessuna spesa registrata.");
        return;
    }

    for (let i = 0; i < spese.length; i++) {
        let s = spese[i];
        console.log(s.id + ". " + s.descrizione + " - " + s.importo + "€ - " + s.categoria + " - " + s.data);
    }
}


/**
 * Calcola e stampa la somma totale di tutte le spese.
 * @returns {number} Il totale complessivo in euro.
 */
function calcolaTotaleComplessivo() {

    let totale = 0;
    for (let i = 0; i < spese.length; i++) {
        totale += spese[i].importo;
    }

    console.log("Totale: " + totale + "€");
    return totale;
}


/**
 * Calcola e stampa il totale delle spese suddiviso per categoria.
 * @returns {void}
 */
function calcolaTotalePerCategoria() {

    let categorie = [];
    let totali = [];

    for (let i = 0; i < spese.length; i++) {
        let trovata = false;

        for (let j = 0; j < categorie.length; j++) {
            if (categorie[j] === spese[i].categoria) {
                totali[j] += spese[i].importo;
                trovata = true;
            }
        }

        if (!trovata) {
            categorie.push(spese[i].categoria);
            totali.push(spese[i].importo);
        }
    }

    for (let i = 0; i < categorie.length; i++) {
        console.log(categorie[i] + ": " + totali[i] + "€");
    }
}


/**
 * Genera un report mensile delle spese di un mese e anno indicati dall'utente.
 * @returns {void}
 */
function reportMensile() {

    let mese = prompt("Inserisci il mese (es. 03):");
    let anno = prompt("Inserisci l'anno (es. 2024):");
    let periodo = anno + "-" + mese;

    let trovata = false;
    for (let i = 0; i < spese.length; i++) {
        if (spese[i].data.substring(0, 7) === periodo) {
            let s = spese[i];
            console.log(s.id + ". " + s.descrizione + " - " + s.importo + "€ - " + s.categoria);
            trovata = true;
        }
    }

    if (!trovata) {
        console.log("Nessuna spesa per " + periodo + ".");
    }
}


/**
 * Trova e stampa la spesa di importo maggiore.
 * @returns {Spesa|undefined} La spesa con importo più alto, oppure undefined se non ci sono spese.
 */
function spesaMaggiore() {

    if (spese.length === 0) {
        console.log("Nessuna spesa registrata.");
        return;
    }

    let max = spese[0];
    for (let i = 1; i < spese.length; i++) {
        if (spese[i].importo > max.importo) {
            max = spese[i];
        }
    }

    console.log("Spesa maggiore: " + max.descrizione + " - " + max.importo + "€");
    return max;
}


/**
 * Chiede i dati di una nuova spesa tramite prompt e la registra.
 * @returns {void}
 */
function inputRegistraSpesa() {
    let descrizione = prompt("Descrizione:");
    let importo = parseFloat(prompt("Importo:"));
    let categoria = prompt("Categoria:");
    let data = prompt("Data (YYYY-MM-DD):");
    registraSpesa(descrizione, importo, categoria, data);
}


/**
 * Chiede i dati per modificare una spesa esistente e la modifica.
 * @returns {void}
 */
function inputModificaSpesa() {
    let id = parseInt(prompt("ID della spesa da modificare:"));
    let nuovaDescrizione = prompt("Nuova descrizione:");
    let nuovoImporto = parseFloat(prompt("Nuovo importo:"));
    let nuovaCategoria = prompt("Nuova categoria:");
    modificaSpesa(id, nuovaDescrizione, nuovoImporto, nuovaCategoria);
}


/**
 * Mostra il menu principale e gestisce la scelta dell'utente.
 * @returns {void}
 */
function menu() {

    let scelta = prompt(
        "Cosa vuoi fare?\n" +
        "1 - Aggiungi spesa\n" +
        "2 - Modifica spesa\n" +
        "3 - Mostra tutte le spese\n" +
        "4 - Totale complessivo\n" +
        "5 - Totale per categoria\n" +
        "6 - Report mensile\n" +
        "7 - Spesa maggiore\n" +
        "0 - Esci"
    );

    if (scelta === "1") {
        inputRegistraSpesa();
        menu();
    } else if (scelta === "2") {
        inputModificaSpesa();
        menu();
    } else if (scelta === "3") {
        elencaSpese();
        menu();
    } else if (scelta === "4") {
        calcolaTotaleComplessivo();
        menu();
    } else if (scelta === "5") {
        calcolaTotalePerCategoria();
        menu();
    } else if (scelta === "6") {
        reportMensile();
        menu();
    } else if (scelta === "7") {
        spesaMaggiore();
        menu();
    } else if (scelta === "0") {
        console.log("Arrivederci!");
    } else {
        console.log("Scelta non valida.");
        menu();
    }
}

menu();
