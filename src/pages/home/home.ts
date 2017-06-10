import { ItemDetailsPage } from './../item-details/item-details';
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
selectItem(item){
  this.navCtrl.push(ItemDetailsPage, { item: item });
}
}
