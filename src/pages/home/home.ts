import { ItemDetailsPage } from './../item-details/item-details';
import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';

import { AppVersion } from '@ionic-native/app-version';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { Geolocation } from '@ionic-native/geolocation';

import {GoogleMap} from  '@ionic-native/google-maps';

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
    private camera: Camera,
    platform: Platform
  ) {
      platform.ready().then(() => {
        let map = new GoogleMap('map')
        Geolocation.getSupportedPlatforms()
        Camera.getSupportedPlatforms()
 console.log("Version",AppVersion.getSupportedPlatforms());
});
  }


selectItem(item){
  this.modalCtrl.create(ItemDetailsPage, { item: item }).present();
}
}