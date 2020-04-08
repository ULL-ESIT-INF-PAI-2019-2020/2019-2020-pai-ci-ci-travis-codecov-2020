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
let complejo = require("../src/Complex.js");

let numeroComplejo = new complejo.Complex(5, 10);
describe("Test unitarios para clase numero complejo:",
function() {
  describe("Probando getter de la clase numeroComplejo", function() {
  
    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor retornado de getParteReal", function() {
      let parteReal = numeroComplejo.getParteReal();
      expect(parteReal).to.equal(5);
    });

    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion getter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor retornado de getParteImaginaria", function() {
      let parteImaginaria = numeroComplejo.getParteReal();
      expect(parteImaginaria).to.equal(5);
    });
  });

  describe("\n    Probando setter de la clase numeroComplejo", function(){

    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion setter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor introducido setParteReal", function() {
      numeroComplejo.setParteReal(20);
      expect(numeroComplejo.getParteReal()).to.equal(20);
    });

    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion setter
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor introducido setParteImaginaria", function() {
      numeroComplejo.setParteImaginaria(30);
      expect(numeroComplejo.getParteImaginaria()).to.equal(30);
    });
  });

  describe("\n    Probando cuadrados de la clase numeroComplejo", function(){

    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion de los cuadrados
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando cuadrado de parteReal del numero Complejo", function() {
      let cuadrado = numeroComplejo.cuadradoParteReal();
      expect(cuadrado).to.equal(400);
    });

    /**
    * @description Expect para comprobar el correcto funcionamiento de funcion de los cuadrados
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando cuadrado de parteImaginaria del numero Complejo", function() {
      let cuadrado = numeroComplejo.cuadradoParteImaginaria();
      expect(cuadrado).to.equal(900);
    });
  });

  describe("\n    Probando calculos de parteReal para Mandelbrot", function(){
    
    /**
    * @description Expect para comprobar el correcto funcionamiento 
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor calculado de parteReal", function() {
      let resultado = numeroComplejo.calcularParteReal();
      expect(resultado).to.equal(-500);
    });

    /**
    * @description Expect para comprobar el correcto funcionamiento de calculos
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor calculado de parteImaginaria", function() {
      let resultado = numeroComplejo.calcularParteImaginaria();
      expect(resultado).to.equal(1200);
    });
  });

  describe("\n    Probando comprobacion de numero complejo mayor que 2", function(){

    /**
    * @description Expect para demostrar la comprobacion de calculos
    * @param {}
    * @returns Mostramos en caso de funcionar, la funcion, que la funcion es correcta
    */
    it ("Comprobando valor calculado", function() {
      expect(numeroComplejo.mayorQueDos()).to.equal(false);
    });
  });
});