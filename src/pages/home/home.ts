import { ItemDetailsPage } from './../item-details/item-details';
import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';

import { AppVersion } from '@ionic-native/app-version';

import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

items = [
   { description:'Item1'},
   { description:'Item2'},
   { description:'Item3'}
];

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    platform: Platform
  ) {
      platform.ready().then(() => {
 console.log("Version",AppVersion.getSupportedPlatforms());
});
  }


selectItem(item){
  this.modalCtrl.create(ItemDetailsPage, { item: item }).present();
}
}