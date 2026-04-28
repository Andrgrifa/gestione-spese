let nextId = 1;
let spese = [];


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


function calcolaTotaleComplessivo() {

    let totale = 0;
    for (let i = 0; i < spese.length; i++) {
        totale += spese[i].importo;
    }

    console.log("Totale: " + totale + "€");
    return totale;
}


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


function inputRegistraSpesa() {
    let descrizione = prompt("Descrizione:");
    let importo = parseFloat(prompt("Importo:"));
    let categoria = prompt("Categoria:");
    let data = prompt("Data (YYYY-MM-DD):");
    registraSpesa(descrizione, importo, categoria, data);
}


function inputModificaSpesa() {
    let id = parseInt(prompt("ID della spesa da modificare:"));
    let nuovaDescrizione = prompt("Nuova descrizione:");
    let nuovoImporto = parseFloat(prompt("Nuovo importo:"));
    let nuovaCategoria = prompt("Nuova categoria:");
    modificaSpesa(id, nuovaDescrizione, nuovoImporto, nuovaCategoria);
}


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
