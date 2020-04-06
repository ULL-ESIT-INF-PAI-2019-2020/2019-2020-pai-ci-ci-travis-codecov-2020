/** Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 3º
 * @file 
 * @class
 * @subject Presentación PAI - CI | TRAVIS | CODECOV
 * @author Jorge Acevedo de León
 * Correo: alu0101123622@ull.es
 * @since 26/03/2020
 * @version 1.0.0
 * 
 * Contenido: Implementación de la clase número complejo
 *              
*/

class Complex {
  constructor(realComponent, imaginaryComponent) {
    this.realComponent = realComponent;
    this.imaginaryComponent = imaginaryComponent;
  }

  /**
   * Get the real component
   * @return {float} Real component 
   */
  get realComponent() {
    return this._realComponent;
  }

  /**
 * Get the imaginary component
 * @return {float} imaginary component 
 */
  get imaginaryComponent() {
    return this._imaginaryComponent;
  }

  /**
 * Set the real component
 * @param value to be set
 */
  set realComponent(value) {
    this._realComponent = value;
  }

  /**
 * Set the real component
 * @param value to be set 
 */
  set imaginaryComponent(value) {
    this._imaginaryComponent = value;
  }

  /**
 * Writes the complex 
 */
  writeComplex() {
    if (this._imaginaryComponent < 0) {
      console.log(`${realComponent} ${imaginaryComponent}i`);
    }
    else {
      console.log(`${this._realComponent} + ${this._imaginaryComponent}i`);
    }
  }

  /**
 * Calculates the module operation over the calling object
 */
  module() {
    return Math.round((Math.sqrt(Math.pow(this._realComponent, 2) +
      Math.pow(this._imaginaryComponent, 2))) * 1000) / 1000;
  }

  /**
 * Get the real component
 * @param {Complex} complexToAdd Adds to complex number, result left at the calling object
 */
  add(complexToAdd) {
    let newReal = this._realComponent + complexToAdd.realComponent;
    let newImaginary = this._imaginaryComponent + complexToAdd.imaginaryComponent;
    return new Complex(newReal, newImaginary);
  }

  /**
* Calculates the square operation of the calling object
*/
  square() {
    let newReal = Math.pow(this._realComponent, 2) - Math.pow(this._imaginaryComponent, 2);
    let newImaginary = 2 * this._realComponent * this._imaginaryComponent;
    return new Complex(newReal, newImaginary);
  }

}
