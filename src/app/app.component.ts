import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

   amyArr = ['him','hers','yours','theirs'];
   angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';
buttonStatus = true;

title="app comp";
description=" desc";

}
