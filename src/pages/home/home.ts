import { ItemDetailsPage } from './../item-details/item-details';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

items = [ 'Item1', 'Item2', 'Item3'];
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController) {

  }
selectItem(item){
  this.modalCtrl.create(ItemDetailsPage, { item: item }).present();
}
}
