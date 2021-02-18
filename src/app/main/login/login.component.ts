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
    console.log(dataUser);
    this.loginService.signUp(dataUser)
      .subscribe((res) => {
        console.log('sucesso =>', res);
      }, (error) => {
        console.log(`Erro => ${error}`);
      });
  }

  signUp() {
  }
  reset() {

  }
}
