scrivo un for(let i = 1; i <= 100; i++) che mi permette di andare in loop fino a quando la variabile i non raggionge valore 100 incrementando se stessa di 1 a ogni ripetizione

all'interno di questo for inserisco un if(i%3 === 0 && i%5 === 0) così che se entrambe le condizioni sono vere verrà stampato in console in console buzzfizz

creo un else if seguendo lo stesso ragionamento, quindi else if(i%5 === 0) mi permetterà il fatto che ogni numero diviso per 5 con resto 0 renda vera la condizione per poter stampare all'interno della console buzz

creo un secondo else if: else if(i%3 === 0) perché se i numeri diviso 3 mi danno resto 0 significa che sono multipli di 3 e all'interno delle parentesi graffe stampo fizz

infine nell'ultimo passaggio creo un else così da poter stampare nella console la variabile i col suo valore