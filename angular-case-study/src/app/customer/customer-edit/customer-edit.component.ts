import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerFormGroup: FormGroup;
  customerId: number;
  customerTypeList: string[] = ['Diamond', 'Platinium', 'Gold', 'Silver', 'Member'];

  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerId = Number(this.activatedRoute.snapshot.params.id);
    const customer = this.customerService.findById(this.customerId);

    this.customerFormGroup = new FormGroup({
      customerId: new FormControl(customer.customerId),
      customerName: new FormControl(customer.customerName, Validators.required),
      customerBirthday: new FormControl(customer.customerBirthday, this.checkMinAge18AndMaxAge80),
      customerGender: new FormControl(customer.customerGender, Validators.required),
      customerIdCard: new FormControl(customer.customerIdCard, [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
      customerPhone: new FormControl(customer.customerPhone, [Validators.required, Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')]),
      customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.email]),
      customerAddress: new FormControl(customer.customerAddress, Validators.required),
      customerType: new FormControl(customer.customerType, Validators.required)
    });
  }

  updateCustomer(id: any): void {
    const customer = this.customerFormGroup.value;
    this.customerService.updateCustomer(id, customer);
    alert('Cập nhật thành công!');
    this.router.navigateByUrl('customer');
  }

  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }
}
