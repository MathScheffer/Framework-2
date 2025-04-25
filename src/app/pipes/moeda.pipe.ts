import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda',
  standalone: false
})
export class MoedaPipe implements PipeTransform {

  transform(valor: number | undefined): string {
    if(!valor){
      return ""
    }
    //Setar 2 casas decimais
    let valorDecimal = valor.toFixed(2);
    const valorDecimalBr = valorDecimal.replace(".",",");
    const valorMoeda = `R$ ${valorDecimalBr}`;
    return valorMoeda;
  }

}
