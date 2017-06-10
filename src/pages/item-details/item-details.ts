import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';
@Component({
    templateUrl: 'item-details.html'
})

export class ItemDetailsPage {
item;

constructor(NavParams: NavParams,
private viewCtrl: ViewController ){

    this.item = NavParams.get('item');
}

cancel() {
this.viewCtrl.dismiss();
}

done() {
this.viewCtrl.dismiss();
}

}