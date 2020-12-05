import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  isAuthorised: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginHandler(loginFormData: any): void {
    console.log(loginFormData);

    this.authService.login(loginFormData.value)
      .subscribe((res: any) => {
        console.log(res);

        if (res && res.token) {
          // 1. save the token in browser's storage( local/session)
          this.authService.saveToken(res.token);
          this.isAuthorised = false;
          console.log(res.token);
          this.router.navigate(['']);
        }
      });
  }

}
