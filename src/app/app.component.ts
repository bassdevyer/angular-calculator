import {Component} from '@angular/core';
import {Sum} from './sum.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación de Calculadora';

  result: number;

  onAdd(result: number) {
    this.result = result;
  }
}
