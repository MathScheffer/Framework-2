import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../produto';

@Pipe({
  name: 'filtroPesquisa',
  standalone: false,
  pure: false //deixa de conservar o status do parametro recebido, tornando-o dinamico conforme as alterações
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], nomeProduto: string | undefined): Produto[] {
    if(!nomeProduto || nomeProduto.length < 3){
      return listaProdutos;
    }
    return listaProdutos.filter(produto => produto.nome?.toLocaleLowerCase().includes(nomeProduto.toLocaleLowerCase()));
  }

}
