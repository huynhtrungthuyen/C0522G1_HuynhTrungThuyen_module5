import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
    customerName: new FormControl(''),
    customerBirthday: new FormControl(''),
    customerGender: new FormControl(''),
    customerIdCard: new FormControl(''),
    customerPhone: new FormControl(''),
    customerEmail: new FormControl(''),
    customerAddress: new FormControl(''),
    customerType: new FormControl('')
  });

  customerTypeList: string[] = ['Diamond', 'Platinium', 'Gold', 'Silver', 'Member'];

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    const customer = this.customerFormGroup.value;
    this.customerService.saveFacility(customer);
    alert('Thêm mới dịch vụ  [' + customer.customerName + ']  thành công!');
    this.customerFormGroup.reset();
    this.router.navigateByUrl('customer');
  }
}
