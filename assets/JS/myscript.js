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

