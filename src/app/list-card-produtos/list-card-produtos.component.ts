import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-card-produtos',
  standalone: false,
  templateUrl: './list-card-produtos.component.html',
  styleUrl: './list-card-produtos.component.css'
})
export class ListCardProdutosComponent {
  @Input() listaProdutos: any[] = []
}
