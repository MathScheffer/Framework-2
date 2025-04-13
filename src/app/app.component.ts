import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cadastro de produtos';
  @Output() produtos: any[] = [
    {id: 1, nome: "Abacaxi", preco: 15},
    {id: 2, nome: "Uva", preco: 10},
    {id: 3, nome: "Limao", preco: 5}
  ]

  addProduto(produto: any) {
    this.produtos.push(produto)
  }
}
