import { FormGroup } from '@angular/forms';

export function PasswordValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (['signIn', 'reset'].includes(formGroup.controls['action'].value)) return matchingControl.setErrors(null);
    if (matchingControl.errors && !matchingControl.errors.passwordValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ passwordValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}