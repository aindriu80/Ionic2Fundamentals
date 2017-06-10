import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
@Component({
    templateUrl: 'item-details.html'
})

export class ItemDetailsPage {
item;

constructor(NavParams: NavParams){
    this.item = NavParams.get('item');
}
}