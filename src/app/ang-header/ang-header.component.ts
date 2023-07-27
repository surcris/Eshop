import { Component } from '@angular/core';
import { AngModalEtatService } from '../ang-modal-etat.service';

@Component({
  selector: 'app-ang-header',
  templateUrl: './ang-header.component.html',
  styleUrls: ['./ang-header.component.css']
})
export class AngHeaderComponent {

  menu:boolean = false;
  constructor(private modalEtat:AngModalEtatService){
    
  }

  changeMenu(){
    this.menu = !this.menu;
    console.log(this.menu)
  }
}
