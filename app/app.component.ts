import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
              <h1>{{title}}</h1>
              <h2>{{best_friend.name}} details!</h2>
              <div><label> Mobile: </label>{{best_friend.mobile}}</div>
              <div>
                <label>Name: </label>
                <!--<input #friend_name  (keyup.enter)="showMe(friend_name.value)" placeholder="name">-->
                <input  [(ngModel)]="best_friend.name" placeholder="name">
            
              </div>
              `,
})
export class AppComponent {
    title = "My Best Friend";
    best_friend:MyBestFriend = {
        mobile: 495367667,
        name: 'Jomon John'
    };
    // binding event Only
    /* showMe(friend_name: String){
     console.log(friend_name);
     }*/
}

export class MyBestFriend {
    mobile:number;
    name:string;


}

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */