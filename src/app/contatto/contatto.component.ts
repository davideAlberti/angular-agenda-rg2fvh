import { Component, OnInit, Input } from '@angular/core';
import { Contatto } from './contatto.model'

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent{
  contatto: Contatto = new Contatto('Davide', 'Alberti', 'davide.alberti@marconirovereto.it', '1234567890', 5)

  setTextColor() {
    return this.contatto.isPreferito ? "red" : "black"
  }
}