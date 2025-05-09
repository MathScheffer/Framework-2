import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { ListCardProdutosComponent } from './list-card-produtos/list-card-produtos.component';
import { MoedaPipe } from './pipes/moeda.pipe';
import { FiltroPesquisaPipe } from './pipes/filtro-pesquisa.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormProdutosComponent,
    TabelaProdutosComponent,
    CardProdutoComponent,
    ListCardProdutosComponent,
    MoedaPipe,
    FiltroPesquisaPipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  //cria uma espécie de service
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
