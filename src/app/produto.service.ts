import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    {id: 1, nome: "Abacaxi", preco: 15},
    {id: 2, nome: "Uva", preco: 10},
    {id: 3, nome: "Limao", preco: 5}
  ]
  constructor() { 
  }
    
  addProduto(produto: Produto) {
    this.produtos.push(produto)
  }

  listar():Produto[]{
    return this.produtos;
  }
}
