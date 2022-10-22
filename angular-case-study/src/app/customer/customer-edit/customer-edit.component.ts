import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerId = Number(this.activatedRoute.snapshot.params.id);
    const customer = this.customerService.findById(this.customerId);

    this.customerFormGroup = new FormGroup({
      customerId: new FormControl(customer.customerId),
      customerName: new FormControl(customer.customerName),
      customerBirthday: new FormControl(customer.customerBirthday),
      customerGender: new FormControl(customer.customerGender),
      customerIdCard: new FormControl(customer.customerIdCard),
      customerPhone: new FormControl(customer.customerPhone),
      customerEmail: new FormControl(customer.customerEmail),
      customerAddress: new FormControl(customer.customerAddress),
      customerType: new FormControl(customer.customerType)
    });
  }

  updateCustomer(id: any): void {
    const customer = this.customerFormGroup.value;
    this.customerService.updateCustomer(id, customer);
    alert('Cập nhật thành công!');
    this.router.navigateByUrl('customer');
  }
}
