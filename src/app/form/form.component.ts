import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Sum} from '../sum.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() add = new EventEmitter<number>();
  addend1Input: number;
  addend2Input: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd() {
    const result = this.addend1Input + this.addend2Input;
    this.add.emit(result);
  }

}
