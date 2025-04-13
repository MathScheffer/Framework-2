import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { ListCardProdutosComponent } from './list-card-produtos/list-card-produtos.component';
@NgModule({
  declarations: [
    AppComponent,
    FormProdutosComponent,
    TabelaProdutosComponent,
    CardProdutoComponent,
    ListCardProdutosComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
