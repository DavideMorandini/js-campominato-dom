
/*  Consegna:

    -   L'utente sceglie un livello di difficoltà e clicca "Play" e in base al livello scelto si viene a generare una griglia di gioco quadrata le cui caratteristiche strutturali dipendono dalla scelta effettuata:    
        -   SE sceglie il livello EASY, si genera una griglia quadrata con numeri compresi tra 1 e 100

        -   SE sceglie il livello MEDIUM, si genera una griglia quadrata con numeri compresi tra 1 e 81

        -   SE sceglie il livello HARD, si genera una griglia quadrata con numeri compresi tra 1 e 49
    
    -   Il computer, in base al range del livello di difficoltà precedentemente scelto dall'utente, deve generare 16 numeri randomici (che rappresentano le bombe) 

    -   Ogni singola cella può contenere 1 SOLO numero/bomba (perciò all'interno dell'array NON potranno esserci 2 numeri uguali)

    -   SE l'utente trova la bomba, la cella incriminata si colora di rosso e la partita termina, ALTRIMENTI se l'utente NON trova la bomba la cella cliccata si colora d'azzurro e l'utente può proseguire con il gioco cliccando su altre celle

    -  La partita termina quando il giocatore o trova una bomba, oppure esaurisce il massimo possibile di possibilità

    -   Al termine della partita il software comunica il punteggio
*/

// Dichiaro/creo una variabile per salvare l'Input dell'utente e aggancio l'elemento HTML (cioè il bottone/pulsante) 
let userPlay = document.getElementById("play");
userPlay.addEventListener("click", playGame);

// Creo una funzione per poter fai iniziare il gioco
function playGame() {

    // Nascondo la scritta principale del gioco
    let introText = document.getElementById("intro-text");
    introText.classList.add("hidden");

    // Rendo visibile la griglia del gioco
    let mainGrid = document.getElementById("grid");
    mainGrid.classList.remove("hidden");

    // Nascondo il messaggio che annuncia il risultato
    document.getElementById("endgame").classList.add("hidden");

    // Dichiaro/creo una variabile per il n. MAX delle bombe
    let maxBombNumber = 16;

    // Scelta del livello di difficoltà in base alla scelta efefttuta dall'utente
    let userDifficulty = document.getElementById("leveltype").value;

    // Dichiaro/creo variabili che, in base al livello di difficoltà scelto dall'utente, determineranno le caratteristiche strutturali della griglia quadrata di gioco
 
    // Variabile per n. celle
    let numbersOfCells;

    // Variabile per colonne su 1 riga
    let gridDimension;

    // In base alla scelta effettuata dall'utente la griglia di gioco assume determinate caratteristiche strutturali

    if(userDifficulty === "easy") {
        numbersOfCells = 100;
        gridDimension = 10;

    } else if(userDifficulty === "hard") {
        numbersOfCells = 81;
        gridDimension = 9;
        
    } else if(userDifficulty === "crazy") {
        numbersOfCells = 49;
        gridDimension = 7;
    }

    // variabile per richiamare la funzione che genera le bombe
    let bombComeArray = generateBombComeArray(numbersOfCells, maxBombNumber);
    console.log(bombComeArray);

    // Calcolare il n. MAX di tentativi che l'utente può fare
    let maxAttemps = parseInt(numbersOfCells - bombComeArray.lenght);

    // Dichiaro/creo una variabile dove all'interno di un array inserisco i tentiativi dell'utente e celle cliccate
    let rightAttemps = [];
    console.log("Tentativi utente:" + "" + rightAttemps);


    // Creazione delle celle in base alla scelta del livello selezionato dall'utente

    for( let i = 1; i <= numbersOfCells; i++ ) {
        
        let newGeneratedCell = generateCellsItem(i, gridDimension);
        
        newGeneratedCell.addEventListener("click", cellsClick);
        mainGrid.appendChild(newGeneratedCell);
    }
    
   
