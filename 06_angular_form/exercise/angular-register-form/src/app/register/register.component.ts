import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countryList = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Lào'},
    {id: 3, name: 'Campuchia'},
    {id: 4, name: 'Tung Của'},
    {id: 5, name: 'Hàn Xẻng'}
  ];

  registerFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.registerFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', Validators.required)
      }, this.checkConfirmPassword),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('[+]84[0-9]{9,10}')])
    });
  }

  checkConfirmPassword(abstractControl: AbstractControl): any {
    const formPassword = abstractControl.value;
    return formPassword.password === formPassword.confirmPassword ? null : {passwordNotSame: true};
  }

  getRegisterInfo(): void {
    console.log('Thông tin đăng kí: ');
    console.log(this.registerFormGroup.value);
  }
}
