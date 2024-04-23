import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Dashboard', url: '/'},
        {title: 'ProgressBar', url: 'progress'},
        {title: 'Graficos', url: 'grafic1'},
        {title: 'Promesas', url: 'promeses'},
        {title: 'Rxjs', url: 'rxjs'},
      ]
    }
  ];

  constructor() { }
}
