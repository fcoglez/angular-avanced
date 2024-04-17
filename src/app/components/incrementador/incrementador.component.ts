import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent implements OnInit{
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  

  // @Input('value') progress: number = 40;
  @Input() inputValue: number = 40;
  @Input() btnClass: string = 'btn-primary';


  @Output() outputValue: EventEmitter<number> = new EventEmitter();

  changeValue(value: number): void {
    if (this.inputValue >= 100 && value >= 0) {
      this.outputValue.emit(100);
      this.inputValue = 100;
      return;
    }
  
    if (this.inputValue <= 0 && value < 0) {
      this.outputValue.emit(0);
      this.inputValue = 0;
      return;
    }

    this.inputValue = this.inputValue + value;
    this.outputValue.emit(this.inputValue);
  }

}
