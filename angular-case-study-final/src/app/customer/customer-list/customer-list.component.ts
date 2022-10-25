import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[];
  customerListPaging: Customer[];
  curPage = 1;
  totalPage: number;

  customerNameDelete: string;
  customerIdDelete: number;

  customerNameSearch = '';
  customerAddressSearch = '';
  customerPhoneSearch = '';

  mess: string;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.findAllCustomer().subscribe(value => {
      this.totalPage = Math.ceil(value.length / 5);
      this.customerListPaging = value.slice(0, 5);
      this.customerList = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị danh sách khách hàng!');
    });

    this.mess = '';
  }

  next(): void {
    this.curPage++;
    this.customerListPaging = this.customerList.slice((this.curPage - 1) * 5, this.curPage * 5);
  }

  previos(): void {
    this.curPage--;
    this.customerListPaging = this.customerList.slice((this.curPage - 1) * 5, this.curPage * 5);
  }

  getInfoCustomerDelete(customerName: string, customerId: number): void {
    this.customerNameDelete = customerName;
    this.customerIdDelete = customerId;
  }

  deleteCustomer(): void {
    this.customerService.deleteCustomer(this.customerIdDelete).subscribe(() => {
      this.ngOnInit();
      this.mess = 'Xóa khách hàng  [' + this.customerNameDelete + '] thành công!';
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }

  searchByMore(): void {
    this.customerService.findAllCustomer().subscribe(value => {
      this.customerList = value.filter(item => item.customerName.toLowerCase().includes(this.customerNameSearch.toLowerCase())
        && item.customerAddress.toLowerCase().includes(this.customerAddressSearch.toLowerCase())
        && item.customerPhone.toLowerCase().includes(this.customerPhoneSearch.toLowerCase()));
      this.totalPage = Math.ceil(this.customerList.length / 5);
      this.customerListPaging = this.customerList.slice(0, 5);
    }, error => {
      console.log(error);
    }, () => {
      console.log('Tìm kiếm khách hàng có tên là: "' + this.customerNameSearch + '" (có ' + this.customerList.length + ' kết quả).');
    });
  }
}
