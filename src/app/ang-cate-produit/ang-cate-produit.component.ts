import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-cate-produit',
  templateUrl: './ang-cate-produit.component.html',
  styleUrls: ['./ang-cate-produit.component.css']
})
export class AngCateProduitComponent {
public listeCategorir = [
  "Tous produits","Boisson","Nourriture","Confiserie","Alcool"
]
}
