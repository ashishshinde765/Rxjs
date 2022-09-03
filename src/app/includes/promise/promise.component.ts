import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  constructor() {}

  Purchased: any;

  dell = {
    brand: 'Hp',
    Color: 'White',
  };
  Hp = {
    brand: 'Hp',
    color: 'White',
  };
  NoService = {
    Status: 'Not avalable',
  };

  dellLaptop() {
    return false;
  }

  hpLaptop() {
    return true;
  }
  ngOnInit(): void {
    // let buyLaptop = new Promise(function(resolve, reject){
    //   resolve('Promise is resolved')
    // });

    let buyLaptop = new Promise((resolve, reject) => {
      //  resolve('Promise is resolved');
      //  reject('Promise is rejected');
      if (this.dellLaptop()) {
        return setTimeout(() => {
          // resolve('Dell is been Purchased');
          resolve(this.dell);
        }, 3000);
      } else if (this.hpLaptop()) {
        return setTimeout(() => {
          // resolve('Hp is been Purchased');
          resolve(this.Hp);
        }, 3000);
      } else {
        return setTimeout(() => {
          // reject('Nothing is purchased');
          resolve(this.NoService);
        }, 3000);
      }
    });

    buyLaptop
      .then((res) => {
        console.log('Here, Your', res);
        this.Purchased = res;
      })
      .catch((res) => {
        console.log('Here, Your', res);
        this.Purchased = res;
      });
  }
}
