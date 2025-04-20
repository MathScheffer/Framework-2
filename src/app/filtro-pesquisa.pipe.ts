import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from './produto';

@Pipe({
  name: 'filtroPesquisa',
  standalone: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], nomeProduto: string | undefined): Produto[] {
    if(!nomeProduto || nomeProduto.length < 3){
      return listaProdutos;
    }
    return listaProdutos.filter(produto => produto.nome?.toLocaleLowerCase().includes(nomeProduto.toLocaleLowerCase()));
  }

}
