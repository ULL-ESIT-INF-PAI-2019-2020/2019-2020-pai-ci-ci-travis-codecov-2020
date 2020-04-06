/** Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 3º
 * @file 
 * @subject Práctica 7 PAI - Mandelbrot. Gráficos en JS usando canvas.
 * @author Jorge Acevedo de León
 * Correo: alu0101123622@ull.es
 * @since 26/03/2020
 * @version 1.0.0
 * 
 * Contenido: Script que contiene los TESTS asociados al programa
 *              
 * Referencias:  
 * Enunciado de la práctica:
 *            https://github.com/fsande/PAI-P07-Mandelbrot/blob/master/2019-2020_p07_Mandelbrot.md
 * 
 * Información sobre el conjunto de Mandelbrot:
 *            https://en.wikipedia.org/wiki/Mandelbrot_set
 * 
 * Información sobre método de Monte carlo:
 *            https://en.wikipedia.org/wiki/Monte_Carlo_method
 *
 * Historial de revisiones
 *            26/03/2020 - Inicio de la práctica
*/
"use strict";

const randomComplexArray = generateRandomComplexNumbers(50);
describe('Random Complex Generation', () => {
  context('generateRandomComplexNumbers', () => {
    it('should be a function', () => {
      chai.expect(generateRandomComplexNumbers).to.be.a('function');
    });
    it('should return an array of objects with two properties', () => {
      chai.expect(randomComplexArray).to.be.an('array');
      for (let i = 0; i < randomComplexArray.length; i++) {
        chai.expect(randomComplexArray[i]).to.be.an('object').and.have.a.property('realComponent');
        chai.expect(randomComplexArray[i]).to.be.an('object').and.have.a.property('imaginaryComponent');
      }
    });
    it('The complex numbers generated should be in the range: [(-2.0, 0), (0.5, 1.125)]', () => {
      for (let i = 0; i < randomComplexArray.length; i++) {
        chai.expect(randomComplexArray[i]).property('realComponent').to.satisfy(realComponent => (realComponent >= -2 && realComponent <= 0.5));
        chai.expect(randomComplexArray[i]).property('imaginaryComponent').to.satisfy(imaginaryComponent => (imaginaryComponent >= 0 && imaginaryComponent <= 1.125));
      }
    });
  });
});

