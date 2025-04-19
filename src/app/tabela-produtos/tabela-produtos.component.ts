import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  standalone: false,
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.css'
})
export class TabelaProdutosComponent {
  @Input() listaProdutos: any[] = [];
}
