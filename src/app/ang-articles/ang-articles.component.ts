import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-articles',
  templateUrl: './ang-articles.component.html',
  styleUrls: ['./ang-articles.component.css']
})
export class AngArticlesComponent {
  public listeArticles = [
    {
      titre:"Sprite cerise",
      prix:"1,39",
      categorie:["boisson","gazeux"],
      description:"Boisson gazeuse de la marque sprite",
      note:3.4
    },
    {
      titre:"Sprite cerise",
      prix:"1,39",
      categorie:["boisson","gazeux"],
      description:"Boisson gazeuse de la marque sprite",
      note:3.4
    },
    {
      titre:"Coca cola vanille",
      prix:"1,99",
      categorie:["boisson","gazeux"],
      description:"Boisson gazeuse de la marque Coca cola",
      note:3.4
    },
    {
      titre:"Pulco",
      prix:"1,99",
      categorie:["boisson","non gazeux"],
      description:"Boisson gazeuse de la marque pulco",
      note:3.4
    }
  ];



  constructor(){

  }
}
