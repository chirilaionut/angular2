import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-list-employee></app-list-employee>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Tom';
}
