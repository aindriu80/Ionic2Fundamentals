import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

items = [ 'Item1', 'Item2', 'Item3'];
  constructor(public navCtrl: NavController) {

  }
click() {
  console.log("Button was clicked");
}
}
