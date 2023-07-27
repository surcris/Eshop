import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngHeaderComponent } from './ang-header/ang-header.component';
import { AngCateProduitComponent } from './ang-cate-produit/ang-cate-produit.component';
import { AngHomeComponent } from './ang-home/ang-home.component';
import { AngArticlesComponent } from './ang-articles/ang-articles.component';
import { AngMenuNavComponent } from './ang-menu-nav/ang-menu-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AngHeaderComponent,
    AngCateProduitComponent,
    AngHomeComponent,
    AngArticlesComponent,
    AngMenuNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
