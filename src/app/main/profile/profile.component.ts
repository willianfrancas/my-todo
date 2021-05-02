import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loading = false;
  feedback: string = '';

  formProfile = this.fb.group({
    firstname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
    lastname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(32)]],
    username: [null, [Validators.required, Validators.minLength(6)]],
    mobilephone: [null, []],
    email: [null, [Validators.required, Validators.email]],
    password: [null,],
    passwordConfirmation: [null,],
  })

  constructor(private fb: FormBuilder, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadProfile();
  }

  public get f() {
    return this.formProfile.controls
  }

  loadProfile() {
    this.loading = true;
    this.profileService.loadProfileUser()
      .subscribe(userProfile => {
        this.formProfile.patchValue(userProfile);
        this.profileService.saveLocal(userProfile);
        this.loading = false;
      }, error => {
        this.feedback = error.error.message;
        console.log({ error });
        this.loading = false;
      });
  }

  onSubmit() {
    this.loading = true;
    this.feedback = '';
    this.profileService.saveUser(this.formProfile.value)
      .subscribe(user => {
        this.profileService.saveLocal(this.formProfile.value);
        this.feedback = 'Usuário salvo com sucesso';
        this.loading = false;
      }, error => {
        this.loading = false;
        this.feedback = error.error.message;
      });
  }

  cancel(event) {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    this.formProfile.patchValue(user);
  }

  isValid(field) {
    return !field.valid && (field.touched || field.dirty);
  }

  applyCssError(field) {
    return {
      'has-error': this.isValid(field),
      'has-feedback': this.isValid(field),
    }
  }
}
