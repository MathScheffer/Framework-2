import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  standalone: false,
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  produto: any = {id:0, nome: "", preco: 0}
  @Input() listaProdutos: any = [];
  @Output() onSalvar = new EventEmitter<any>();

  cadastrarProduto = () => {
    let id = this.listaProdutos.length > 0 ? this.listaProdutos[this.listaProdutos.length - 1].id + 1 : 1;

    this.produto.id = id;

    if (this.produto.nome && this.produto.preco){
      //this.listaProdutos.push(this.produto)
      this.onSalvar.emit(this.produto)

      this.produto = {id:0, nome: "", preco: 0}
    }
  }
}
