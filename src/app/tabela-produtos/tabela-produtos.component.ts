import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ProdutoApiService } from '../produto-api.service';

@Component({
  selector: 'app-tabela-produtos',
  standalone: false,
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.css'
})
export class TabelaProdutosComponent {
  /* @Input() listaProdutos: any[] = []; */
  listaProdutos: Produto[] = []
  nomePesquisa?: string;
  constructor(private produtoService: ProdutoService,
     private produtoApiService : ProdutoApiService){

    //this.listaProdutos = produtoService.listar();
    this.listar()

  }

  listar = () => {
    this.produtoApiService.listar().subscribe(produtos => {
      this.listaProdutos = produtos;
    })
  }
  deletar = (id?: number) => {
    /* this.produtoService.deletar(id) */

    this.produtoApiService.deletar(id).subscribe( produto => {
        alert(`Produto ${produto.nome} deletado com sucesso!`)
        //Necessário, pois ao deletar, não é atualizada a tabela sem o 
        this.listar();
    })
  }
}
