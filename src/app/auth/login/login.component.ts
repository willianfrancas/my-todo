import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { PasswordValidator } from './password-validator';
import { UserModel } from '../../shared/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('signIn', { static: false }) signIn: ElementRef<HTMLInputElement>

  loading = false;
  submitted = false;
  reset = false;
  
  userName: string;
  user: UserModel[];
  feedback: string = '';
  action = 'signIn';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirmation: [''],
    action: ['signIn'],
  },
    { validators: PasswordValidator('password', 'passwordConfirmation') }
  );

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.signIn.nativeElement.checked = true;
  }

  onSubmit() {
    this.loading = true;
    this.feedback = '';
    this.submitted = true;

    const credentials = this.loginForm.value;
    switch (this.action) {
      case 'signUp':
        this.authService.register(credentials)
          .subscribe((res) => {
            this.feedback = 'usuário criado com sucesso';
            this.loading = false;
          }, (error) => {
            this.feedback = error.error.message;
            this.loading = false;
          });
        break;
      case 'reset':
        this.authService.resetPassword()
          .subscribe((res) => {
            // console.log('reset password =>', res);
            this.loading = false;
          }, (error) => {
            // console.log(`Erro => ${error}`);
            this.feedback = error.error.message;
            this.loading = false;
          });
        break;
      default:
        this.authService.login(credentials)
          .subscribe(resUser => {
            // console.log('Logado com sucesso =>', resUser);
            this.router.navigateByUrl('/home');
            this.loading = false;
          }, error => {
            // console.table(error.error.message);
            this.feedback = error.error.message;
            this.loading = false;
          });
        break;
    }
  }

  public get f() {
    return this.loginForm.controls;
  }

  listenAction(event) {
    this.action = event.target.value;
    this.feedback = '';
    this.loginForm.controls['passwordConfirmation'].clearValidators();
    if (this.action === 'signUp') {
      this.loginForm.controls['passwordConfirmation'].setValidators([Validators.required, Validators.minLength(6)]);
    }
    this.loginForm.controls['passwordConfirmation'].updateValueAndValidity();
  }

  // matchingPasswords(group: FormGroup) {
  //   if (group) {
  //     if (group.controls['password'].value === group.controls['passwordConfirmation'].value) {
  //       return null;
  //     }
  //   }
  //   return { matching: false };
  // }

  // isValidTouched(field) {
  //   return !field.valid && field.touched;
  // }

  // applyCssError(field) {
  //   return {
  //     'has-error': this.isValidTouched(field),
  //     'has-feedback': this.isValidTouched(field),
  //   }
  // }
}
