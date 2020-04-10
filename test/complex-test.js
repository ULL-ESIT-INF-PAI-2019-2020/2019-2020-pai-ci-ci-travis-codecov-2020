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
 * Contenido: Implementación de tests la clase número complejo
 *
 * Historial de revisiones
 *            01/04/2020 - Inicio del trabajo
*/

const expect = require("chai").expect;
const mocha =  require("mocha");
const Card = require("../src/Card.js");

const cardA  = new Card.Card("Spades", 1);
const cardB  = new Card.Card("Clubs", 11);
const cardC  = new Card.Card("Hearts", 8);
const cardD  = new Card.Card("Diamonds", 13);

describe('Test against Card class', () => {
  context('Card class morphology, four cards to be tested', () => {
    it('should be a object', () => {
      expect(cardA).to.be.a('Object');
      expect(cardB).to.be.a('Object');
      expect(cardC).to.be.a('Object');
      expect(cardD).to.be.a('Object');
    });
  });
  context('Each card should have the suit it had assigned', () => {
    it('should mtach the suits', () => {
      expect(cardA).to.have.property('suit', "Spades");
      expect(cardB).to.have.property('suit', "Clubs");
      expect(cardC).to.have.property('suit', "Hearts");
      expect(cardD).to.have.property('suit', "Diamonds");      
    })
  })
  context('Each card should have the rank it had assigned', () => {
    it('should mtach the ranks', () => {
      expect(cardA).to.have.property('rank', 1);
      expect(cardB).to.have.property('rank', 11);
      expect(cardC).to.have.property('rank', 8);
      expect(cardD).to.have.property('rank', 13);      
    })
  })
  context('The card values (comparation) should work as expected', () => {
    it(`${cardA.toString()} should be bigger than ${cardB.toString()}`, () => {
      expect(cardA.valueOf()).to.be.gt(cardB.valueOf());
    })
    it(`${cardA.toString()} should be bigger than ${cardC.toString()}`, () => {
      expect(cardA.valueOf()).to.be.gt(cardC.valueOf());
    })
    it(`${cardD.toString()} should be lower than ${cardB.toString()}`, () => {
      expect(cardD.valueOf()).to.be.gt(cardB.valueOf());
    })
    it(`${cardC.toString()} should be bigger than ${cardD.toString()}`, () => {
      expect(cardC.valueOf()).to.be.gt(cardD.valueOf());
    })
  })
});