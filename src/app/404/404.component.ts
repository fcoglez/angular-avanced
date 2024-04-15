import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.css']
})

export class NopagefoundComponent {
  year = new Date().getFullYear();
}
