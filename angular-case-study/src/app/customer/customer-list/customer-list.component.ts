import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers = this.customerService.findAll().slice(0, 5);
  curPage = 1;
  totalPage = Math.ceil(this.customerService.findAll().length / 5);

  customerNameDelete: string;
  customerIdDelete: number;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  next(): void {
    this.curPage++;
    this.customers = this.customerService.findAll().slice((this.curPage - 1) * 5, this.curPage * 5);
  }

  previos(): void {
    this.curPage--;
    this.customers = this.customerService.findAll().slice((this.curPage - 1) * 5, this.curPage * 5);
  }

  getInfoCustomerDelete(customerName: string, customerId: number): void {
    this.customerNameDelete = customerName;
    this.customerIdDelete = customerId;
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete);
    this.totalPage = Math.ceil(this.customerService.findAll().length / 5);
    this.customers = this.customerService.findAll().slice((this.curPage - 1) * 5, this.curPage * 5);
    alert('Xóa khách hàng  [' + this.customerNameDelete + ']  thành công!');
  }
}
