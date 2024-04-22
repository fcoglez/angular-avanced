import { Component } from '@angular/core';

@Component({
  selector: 'app-promeses',
  templateUrl: './promeses.component.html',
  styles: ``
})
export class PromesesComponent {

  // promeses: Promise<any>; 
  
  constructor() {
    // this.promeses = new Promise( (resolve ) => {
     
    //   resolve('Hola faku');
     
    // });

    // this.promeses.then( (messague) => {
    //   console.log(messague);
      
    // });

    // console.log('Fin constructor'); 

    this.getUsers().then( users => {
      console.log(users);
    });
  }

  getUsers(){

    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(body => resolve(body.data)) 
    });

  }
     
}
