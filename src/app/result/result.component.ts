import {Component, Input, OnInit} from '@angular/core';
import {Sum} from '../sum.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}

