import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    {id: 1, nome: "Abacaxi", preco: 15, marca: "marca 1", dataValidade: new Date("2025-04-22")},
    {id: 2, nome: "Uva", preco: 10, marca: "marca 1", dataValidade: new Date("2025-04-22")},
    {id: 3, nome: "Limao", preco: 5, marca: "marca 1", dataValidade: new Date("2025-04-22")}
  ]
  constructor() { 
  }
    
  addProduto(produto: Produto) {
    this.produtos.push(produto)
  }

  listar():Produto[]{
    return this.produtos;
  }

  buscarPorId(id?: number): Produto{
    const produto = this.produtos.find(prod => prod.id == id);
    return produto ? Object.assign({}, produto) : new Produto();
  }

  editar(id: number, produto: Produto) {
    const i = this.getIndice(id);
    if(i >= 0) {
      this.produtos[i] = produto;
    }
  }
  deletar(id?: number) {
    const i = this.getIndice(id);
    if(i >= 0){
      this.produtos.splice(i, 1);
    }
  }
  private getIndice(id?: number) {
    return this.produtos.findIndex(prod => prod.id == id);
  }
}
