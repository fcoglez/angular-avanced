import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent {


  constructor(){

    let i = -1;

    const observable = new Observable( observer => {
      
      const interval = setInterval(() => {

        i++
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

      }, 1000);

    });

    observable.subscribe(
      value => console.log('Sub:', value), 
      error => console.warn(error),
      () => console.info('obs terminado')
    );

  }
}
