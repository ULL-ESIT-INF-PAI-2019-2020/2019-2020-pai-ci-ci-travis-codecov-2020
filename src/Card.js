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

const SUITS = {
  CLUBS: {
    NAME: "Clubs",
    VALUE: 0
  },
  DIAMONDS: {
    NAME: "Diamonds",
    VALUE: 100
  },
  HEARTS: {
    NAME: "Hearts",
    VALUE: 200
  },
  SPADES: {
    NAME: "Spades",
    VALUE: 300
  }
};

class Card {
  /**
   * @description Constructor de la clase carta
   * @param {*} suit Palo al que pertenece la carta [Spades, Diamonds, Clubs, Hearts]
   * @param {*} rank Valor de la carta [1-13]
   */
  constructor(suit, rank) {
    this.suit = this.isValidSuit(suit);
    this.rank = this.isValidRank(rank);
  }

  /**
   * @description Getter de clase Card, devuelve el palo de la misma
   * @returns Palo de la carta invocante
   */
  get getSuit() {
    return this.suit;
  }

  /**
   * @description Getter de la clase Card, devuelve el valor de la misma
   * @returns Valor de la carta
   */
  get getRank() {
    return this.rank;
  }

  /**
   * @description Setter de la clase Card, modifica el palo de la misma   
   * */
  set getSuit(suit) {
    this.suit = suit;
  }

  /**
 * @description Setter de la clase Card, modifica el valor de la misma   
 * */
  set getRank(rank) {
    this.rank = rank;
  }

  /**
   * @description Método que devuelve una cadena que describe a la carta
   * @return String con la descripción de la carta
   */
  toString() {
    switch (this.rank) {
      case 1:
        return (`Ace of ${this.suit}`);
      case (2 <= this.rank <= 10):
        return (`${this.rank} of ${this.suit}`);
      case 11:
        return (`Jack of ${this.suit}`);
      case 12:
        return (`Queen ${this.suit}`);
      case 13:
        return (`King of ${this.suit}`);
    }
    return (`${this.rank} of ${this.suit}`);
  }
  /**
   * @description Método que comprueba si el palo introducido es válido y de no serlo
   * devuelve un error
   * @returns Palo en caso de ser un valor válido
   */
  isValidSuit(suit) {
    switch (suit) {
      case SUITS.CLUBS.NAME:
        return SUITS.CLUBS.NAME;
      case SUITS.DIAMONDS.NAME:
        return SUITS.DIAMONDS.NAME;
      case SUITS.HEARTS.NAME:
        return SUITS.HEARTS.NAME;
      case SUITS.SPADES.NAME:
        return SUITS.SPADES.NAME;
      default:
        throw new Error("Card built with unexistent suit");
    }
  }

  /**
   * @description Método que comprueba si el valor introducido es válido y de no serlo
   * devuelve un error
   * @returns Valor en caso de ser un valor válido
   */
  isValidRank(rank) {
    if (1 <= rank <= 13) {
      return rank;
    }
    throw new Error("Card built with invalid rank");
  }

  /**
   * @description Método utilizado para la comparación entre cartas
   * @returns Valor total de la carta
   */
  valueOf() {
    let cardValue = this.rank;
    switch (this.suit) {
      case SUITS.CLUBS.NAME:
        cardValue += SUITS.CLUBS.VALUE;
        break;
      case SUITS.DIAMONDS.NAME:
        cardValue += SUITS.DIAMONDS.VALUE;
        break;
      case SUITS.HEARTS.NAME:
        cardValue += SUITS.HEARTS.VALUE;
        break;
      case SUITS.SPADES.NAME:
        cardValue += SUITS.SPADES.VALUE;
        break;
    }
    return cardValue;
  }
}

module.exports = {Card: Card};