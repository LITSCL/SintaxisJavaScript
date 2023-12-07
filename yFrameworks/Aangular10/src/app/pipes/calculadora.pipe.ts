//Todo lo que se ve en este archivo es un pipe personalizado.

import { Pipe, PipeTransform } from '@angular/core'; //Estos son los módulos necesarios para crear un pipe.

@Pipe({
  name: "calculadora"
})
export class CalculadoraPipe implements PipeTransform {
    
  //dato1 | calculadora: dato2
  //param1               param2
  transform(valor1: any, valor2: any): any {
    var operaciones = `
      Suma: ${valor1 + valor2} -  
      Resta: ${valor1 - valor2} -
      Multiplicación: ${valor1 * valor2} -
      División: ${valor1 / valor2}
    `;
    return operaciones;
    }
}