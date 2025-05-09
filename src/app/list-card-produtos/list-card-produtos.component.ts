import { Component, Input } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ProdutoApiService } from '../produto-api.service';

@Component({
  selector: 'app-list-card-produtos',
  standalone: false,
  templateUrl: './list-card-produtos.component.html',
  styleUrl: './list-card-produtos.component.css'
})
export class ListCardProdutosComponent {
/*   @Input()  */listaProdutos: Produto[] = [];
  constructor(private produtoService: ProdutoService, private produtoApiService: ProdutoApiService){
    //this.listaProdutos = produtoService.listar();

    //O Subscribe atua como um "then" do promise
    this.produtoApiService.listar().subscribe(produtos => {
      this.listaProdutos = produtos;
    })
  }
}
