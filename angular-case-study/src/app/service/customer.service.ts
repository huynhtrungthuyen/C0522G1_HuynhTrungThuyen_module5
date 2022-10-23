import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    {
      customerId: 1,
      customerName: 'Võ Văn Tý',
      customerBirthday: '2001-11-20',
      customerGender: 'Nam',
      customerIdCard: '123456789',
      customerPhone: '0901111111',
      customerEmail: 'cu.ty@gmail.com',
      customerAddress: 'bản LắkKonKu, Gia Lai',
      customerType: 'Gold'
    },
    {
      customerId: 2,
      customerName: 'Hồ Thị Thủy Lợi',
      customerBirthday: '1997-02-14',
      customerGender: 'LGBT',
      customerIdCard: '132314664',
      customerPhone: '0902222222',
      customerEmail: 'ho.thuy.loi@gmail.com',
      customerAddress: 'chùa Linh Ứng, Đà Nẵng',
      customerType: 'Diamond'
    },
    {
      customerId: 3,
      customerName: 'Hồ Minh Trí',
      customerBirthday: '1998-12-12',
      customerGender: 'Nam',
      customerIdCard: '132314543',
      customerPhone: '0903333333',
      customerEmail: 'dong.mau.quy@gmail.com',
      customerAddress: 'phường Mân Đàn, TT Huế',
      customerType: 'Silver'
    },
    {
      customerId: 4,
      customerName: 'Hồ Thị Thủy Tiên',
      customerBirthday: '2000-03-20',
      customerGender: 'Nữ',
      customerIdCard: '132222264',
      customerPhone: '0904444444',
      customerEmail: 'tien.map.mo@gmail.com',
      customerAddress: 'huyện Núi Thành, Quảng Nam',
      customerType: 'Gold'
    },
    {
      customerId: 5,
      customerName: 'Đặng Ngọc Huy',
      customerBirthday: '1998-10-20',
      customerGender: 'LGBT',
      customerIdCard: '132316358',
      customerPhone: '0905555555',
      customerEmail: 'huy3D@gmail.com',
      customerAddress: 'chợ Miếu Bông, Quảng Nam',
      customerType: 'Member'
    },
    {
      customerId: 6,
      customerName: 'Hồ Văn Nam',
      customerBirthday: '1993-07-26',
      customerGender: 'LGBT',
      customerIdCard: '1555555664',
      customerPhone: '0906666666',
      customerEmail: 'ngoc.huyen@gmail.com',
      customerAddress: 'núi Thần Tài, Quảng Nam',
      customerType: 'Diamond'
    },
    {
      customerId: 7,
      customerName: 'Hồ Bảo Ân',
      customerBirthday: '1993-01-02',
      customerGender: 'LGBT',
      customerIdCard: '123445664',
      customerPhone: '0907777777',
      customerEmail: 'an.dau.khat@gmail.com',
      customerAddress: 'bản LắkkKonKu, Đắk Lắk',
      customerType: 'Diamond'
    }
  ];

  constructor() { }

  findAll(): Customer[] {
    return this.customers;
  }

  saveCustomer(customer): void {
    this.customers.push(customer);
  }

  findById(id: number): Customer {
    return this.customers.find(item => item.customerId === id);
  }

  updateCustomer(id: number, customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerId === id) {
        this.customers[i] = customer;
        break;
      }
    }
  }

  deleteCustomer(id: number) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerId === id) {
        this.customers.splice(i, 1);
        break;
      }
    }
  }
}
