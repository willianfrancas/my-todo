import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  action = 'signIn';

  email: string;
  userName: string;
  password: string;

  user: UserModel[]

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    const dataUser = {
      email: this.email,
      password: this.password
    }
    switch (this.action) {
      case 'signUp':
        this.loginService.signUp(dataUser)
          .subscribe((res) => {
            console.log('Criado com sucesso =>', res);
          }, (error) => {
            console.log(`Erro => ${error}`);
          });
        break;
      case 'reset':
        this.loginService.resetPassword(dataUser)
          .subscribe((res) => {
            console.log('reset password =>', res);
          }, (error) => {
            console.log(`Erro => ${error}`);
          });
        break;
      default:
        this.loginService.signIn(dataUser)
          .subscribe((res) => {
            console.log('Logado com sucesso =>', res);
          }, (error) => {
            console.log(`Erro => ${error}`);
          });
        break;
    }
  }

  signUp() {
  }

  reset() {

  }
}
