const prompt=require("prompt-sync")()
let nextId = 1;
let spese = [];

function registraSpesa(descrizione, importo, categoria, data) {

  if (importo <= 0) {
    console.log("Errore: l'importo deve essere positivo.");
    return;
  }

  let nuovaSpesa = {
    id:          nextId,
    descrizione: descrizione,
    importo:     importo,
    categoria:   categoria,
    data:        data
  };

  nextId = nextId + 1;
  spese.push(nuovaSpesa);

  console.log("Spesa registrata correttamente!");
}


function modificaSpesa(id, nuovaDescrizione, nuovoImporto, nuovaCategoria) {

  for (let i = 0; i < spese.length; i++) {

    if (spese[i].id === id) {
      spese[i].descrizione = nuovaDescrizione;
      spese[i].importo     = nuovoImporto;
      spese[i].categoria   = nuovaCategoria;

      console.log("Spesa modificata correttamente!");
      return;
    }

  }

  console.log("Errore: spesa con ID " + id + " non trovata.");
}


function elencaSpese() {

  if (spese.length === 0) {
    console.log("Nessuna spesa registrata.");
    return;
  }

  console.log("--- Elenco spese ---");

  for (let i = 0; i < spese.length; i++) {
    console.log(
      "ID: "          + spese[i].id          +
      " | Descrizione: " + spese[i].descrizione +
      " | Importo: "  + spese[i].importo     + " €" +
      " | Categoria: "+ spese[i].categoria   +
      " | Data: "     + spese[i].data
    );
  }
}




function inputRegistraSpesa() {
  let descrizione = prompt("Inserisci la descrizione:");
  let importo     = parseFloat(prompt("Inserisci l'importo:"));
  let categoria   = prompt("Inserisci la categoria:");
  let data        = prompt("Inserisci la data (es. 2024-03-15):");

  registraSpesa(descrizione, importo, categoria, data);
}


function inputModificaSpesa() {
  let id               = parseInt(prompt("Inserisci l'ID della spesa da modificare:"));
  let nuovaDescrizione = prompt("Inserisci la nuova descrizione:");
  let nuovoImporto     = parseFloat(prompt("Inserisci il nuovo importo:"));
  let nuovaCategoria   = prompt("Inserisci la nuova categoria:");

  modificaSpesa(id, nuovaDescrizione, nuovoImporto, nuovaCategoria);
}




function main() {

  let scelta = prompt(
    "Cosa vuoi fare?\n" +
    "1 - Aggiungi spesa\n" +
    "2 - Modifica spesa\n" +
    "3 - Mostra tutte le spese\n" +
    "0 - Esci"
  );

  if (scelta === "1") {
    inputRegistraSpesa();
    main();
  } else if (scelta === "2") {
    inputModificaSpesa();
    main();
  } else if (scelta === "3") {
    elencaSpese();
    main();
  } else if (scelta === "0") {
    console.log("Arrivederci!");
  } else {
    console.log("Scelta non valida.");
    main();
  }
}

main();
