/** Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 3º
 * @file 
 * @class
 * @subject Trabajo PAI - CI | CODECOV | TRAVIS
 * @author Jorge Acevedo de León, Christian Torres González
 * Correo: alu0101123622@ull.es
 * @since 26/03/2020
 * @version 1.0.0
 * 
 * Contenido: Implementación de la clase número complejo
 *
 * Historial de revisiones
 *            01/04/2020 - Inicio del trabajo
*/

"use strict";

class Deck {
  /**
   * @description Constructor de la clase mazo
  */
  constructor() {
    let cardArray = [];
    for (let i = 1; i < 14; i++) {
      for (const SUIT in SUITS) {
        cardArray.push(new Card(SUITS[SUIT].NAME, i));
      }
    }
    this.cardArray = cardArray;
    
  }

  /**
   * @description Método encargado de la impresión del mazo
  */
  print() {
    for (const CARD of this.cardArray) {
      console.log(CARD.toString());
    }
  }

  /**
   * @description Método encargado de retirar la última carta del mazo y devolverla
   * @returns Última carta del mazo
  */
  popCard() {
    return this.cardArray.pop();
  }

  /**
   * @description Método encargado de introducir una carta en el mazo
   * @param card Carta a ser introducida
   * @returns Última carta del mazo
  */
  pushCard(card) {
    this.cardArray.push(card);
  }

  /**
   * @description Método encargado de barajar aleatoriamente el mazo
  */
  shuffle(card) {
    let selectedCard;
    let temporalCardArray = [];
    let originalNumberOfCards = this.cardArray.length;
    for (let i = 0; i < originalNumberOfCards; i++) {
      selectedCard = Math.floor(Math.random() * this.cardArray.length);
      console.log(`Selected card: ${selectedCard}`);
      temporalCardArray.push(this.cardArray[selectedCard]);
      console.log(temporalCardArray);
      this.cardArray.splice(selectedCard, 1);
    }
    this.cardArray = temporalCardArray;

    this.cardArray.length;
  }

  /**
   * @description Método encargado de ordenar las cartas del mazo
  */
  sort() {
    this.cardArray.sort((a, b) => {
      console.log(`a:${a}, b: ${b}`);
      if (a.valueOf() > b.valueOf()) {
        return -1;
      }
      else {
        return 1;
      }
    })
  }
}