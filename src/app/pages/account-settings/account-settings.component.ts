import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ``
})
export class AccountSettingsComponent implements OnInit{

  public linkTheme =  document.querySelector('#theme');
  public links!: NodeListOf<Element>;

  constructor(){};

  ngOnInit(): void {
    this.links =  document.querySelectorAll('.selector');
    this.changeCurrentTheme();
  
  }

  changeTheme(theme: string){
   const url = `./assets/css/colors/${theme}.css`;
   
   this.linkTheme?.setAttribute('href', url);
   localStorage.setItem('theme', url);
   this.changeCurrentTheme()
  }

  changeCurrentTheme(){
    
    this.links.forEach( element => {

      element.classList.remove('working');

      const btnColorSelected = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnColorSelected}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }

    });
  }

}
