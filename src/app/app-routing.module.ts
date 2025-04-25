import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { ListCardProdutosComponent } from './list-card-produtos/list-card-produtos.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: 'tabela', component: TabelaProdutosComponent}, //localhost:4200/tabela -> Leva para a tabela
  { path: 'novo', component: FormProdutosComponent}, //localhost:4200/novo -> leva para o formulario
  { path: 'lista', component: ListCardProdutosComponent}, //localhost:4200/lista -> leva para a lista de cards
  {path: "edit/:id", component: FormProdutosComponent},
  {path: '', redirectTo: '/tabela', pathMatch: 'full' },
  //{path: '', redirectTo: '/', pathMatch: 'full'}
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
