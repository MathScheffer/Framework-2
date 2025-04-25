import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-produtos',
  standalone: false,
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  produto: Produto = new Produto();
  listaProdutos: Produto[] = [];
  id?: number;
  botaoAcao = "Cadastrar";

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router){
    this.listaProdutos = produtoService.listar();
    this.id = parseInt(this.route.snapshot.params['id']);
    
    if(this.id){
      this.botaoAcao = "Editar";
      this.produto = produtoService.buscarPorId(this.id);
    }
  }
  /* @Input()  listaProdutos: Produto[] = [];*/
    /*
   Usando o event emitter para espalhar as informações
  @Output() onSalvar = new EventEmitter<any>(); 
  */

  salvar = () => {
    if(this.id){
      this.produtoService.editar(this.id, this.produto);
      this.voltar();
    }else{
      /*     let id = this.listaProdutos.length > 0 ? this.listaProdutos[this.listaProdutos.length - 1].id?? + 1 : 1; */
      let id = (this.listaProdutos[this.listaProdutos.length - 1]?.id ?? 0) + 1;
      this.produto.id = id;

      if (this.produto.nome && this.produto.preco){
        //this.listaProdutos.push(this.produto)
        /* Usando o event emitter para espalhar as informações
        this.onSalvar.emit(this.produto) 
        */
        //Podemos substituir o input e output pela função do service, mantendo o principio da DI:
        console.log(this.produto)
        this.produtoService.addProduto(this.produto);
        this.produto = new Produto();
      }
    }
  }

  voltar = () => {
    this.router.navigate(['/tabela'])
  }
}
