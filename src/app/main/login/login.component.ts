import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('signIn', { static: false }) signIn: ElementRef<HTMLInputElement>
  action = 'signIn';
  loading = false;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    action: [''],
  });

  userName: string;
  user: UserModel[]

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.signIn.nativeElement.checked = true;
  }

  onSubmit() {
    this.loading = true;
    const credentials = this.loginForm.value;
    switch (this.action) {
      case 'signUp':
        this.authService.register(credentials)
          .subscribe((res) => {
            console.log('Criado com sucesso =>', res);
          }, (error) => {
            console.log(`Erro => ${error}`);
          });
        break;
      case 'reset':
        this.authService.resetPassword()
          .subscribe((res) => {
            console.log('reset password =>', res);
          }, (error) => {
            console.log(`Erro => ${error}`);
          });
        break;
      default:
        this.authService.login(credentials)
          .subscribe(resUser => {
            console.log('Logado com sucesso =>', resUser);
            this.router.navigateByUrl('/home');
            this.loading = false;
          }, error => {
            console.log(`Erro => ${error}`);
          });
        break;
    }
  }

  listenAction(event) {
    this.action = event.target.value;
  }


}
