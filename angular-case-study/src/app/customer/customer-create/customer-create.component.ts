import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerFormGroup: FormGroup = new FormGroup({
    customerId: new FormControl(''),
    customerName: new FormControl('', Validators.required),
    customerBirthday: new FormControl('', this.checkMinAge18AndMaxAge80),
    customerGender: new FormControl('', Validators.required),
    customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
    customerPhone: new FormControl('', [Validators.required, Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')]),
    customerEmail: new FormControl('', [Validators.required, Validators.email]),
    customerAddress: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required)
  });

  customerTypeList: string[] = ['Diamond', 'Platinium', 'Gold', 'Silver', 'Member'];

  idAuto = this.customerService.findAll()[this.customerService.findAll().length - 1].customerId + 1;

  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    const customer = this.customerFormGroup.value;
    this.customerService.saveCustomer(customer);
    alert('Thêm mới khách hàng  [' + customer.customerName + ']  thành công!');
    this.customerFormGroup.reset();
    this.router.navigateByUrl('customer');
    this.idAuto++;
  }

  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }
}
