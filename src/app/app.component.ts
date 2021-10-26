import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
  ];
  constructor(private router: Router) {}
  localmoney() {
    this.router.navigate(['localmoney'])
  }
  about() {
    this.router.navigate(['about'])
  }
}
