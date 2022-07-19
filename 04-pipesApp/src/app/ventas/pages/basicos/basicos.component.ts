import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'kevyn';
  nombreUpper: string = 'KEVYN';
  nombreCompleto: string = 'keVyn SANtiago'

  fecha: Date = new Date();

}
