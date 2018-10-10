import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public state: boolean = false;
  public opened: boolean = !(window.innerWidth < 600);
  public mode: string = window.innerWidth < 600 ? 'over' : 'side';

  click() {
    this.state = !this.state;
  }
}
