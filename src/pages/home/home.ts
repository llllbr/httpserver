import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from '../../providers/HttpService';

 @Component({
  selector: 'page-home',
  templateUrl: 'home.html'
 })
   export class HomePage {

 constructor(public navCtrl: NavController,private httpService:HttpService) {

}
getTest(){
this.httpService.get("http://www.weather.com.cn/data/sk/101010100.html",null).then(res=>{
    console.log(res);
});
}

  }

