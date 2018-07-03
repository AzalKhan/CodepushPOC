import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {CodePush} from '@ionic-native/code-push';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private codePush: CodePush, private platform: Platform) {

  }

}
