import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-signout',
  template: `
    <h1> You had Signed out</h1>
  `,
  styles: []
})
export class SignoutComponent implements OnInit {

  constructor(private ls :LoginService) { }

  ngOnInit() {
    this.ls.setIsAdminLoggedIn(false);
  }

}
