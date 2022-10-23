import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contracts: Contract[] = [
    {
      contractId: 1,
      startDate: '2022-10-20',
      endDate: '2022-10-21',
      deposit: 1000000,
      customer: {
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
      facility: {
        facilityId: 5,
        facilityName: 'Villa Beach Front Thymeleaf',
        facilityArea: 2000,
        rentCost: 10500000,
        maxPeople: 8,
        standardRoom: 'Vip',
        descriptionOtherConvenience: 'Có hồ bơi',
        poolArea: 100,
        numberOfFloors: 4,
        facilityFree: '',
        rentType: 'Ngày',
        facilityType: 'Villa',
        facilityImage: 'https://pix10.agoda.net/hotelImages/2601996/0/7b0a95ae1cbf0f0650ff89ff15cbfbfb.jpg?ca=7&ce=1&s=1024x768'
      }
    },
    {
      contractId: 2,
      startDate: '2022-10-20',
      endDate: '2022-11-20',
      deposit: 1500000,
      customer: {
        customerId: 7,
        customerName: 'Hồ Bảo Ân',
        customerBirthday: '1993-01-02',
        customerGender: 'LGBT',
        customerIdCard: '123445664',
        customerPhone: '0907777777',
        customerEmail: 'an.dau.khat@gmail.com',
        customerAddress: 'bản LắkkKonKu, Đắk Lắk',
        customerType: 'Diamond'
      },
      facility: {
        facilityId: 6,
        facilityName: 'Spring Framework House 01',
        facilityArea: 500,
        rentCost: 7000000,
        maxPeople: 5,
        standardRoom: 'Vip',
        descriptionOtherConvenience: 'Có ghế tình yêu',
        poolArea: 0,
        numberOfFloors: 3,
        facilityFree: '',
        rentType: 'Tháng',
        facilityType: 'House',
        facilityImage: 'https://i.pinimg.com/736x/a7/b3/c6/a7b3c60afae4a89a3fb12fc8d054156d.jpg'
      }
    },
    {
      contractId: 3,
      startDate: '2022-10-21',
      endDate: '2022-10-22',
      deposit: 0,
      customer: {
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
      facility: {
        facilityId: 4,
        facilityName: 'Villa Beach Back Jquery',
        facilityArea: 1200,
        rentCost: 7500000,
        maxPeople: 7,
        standardRoom: 'Vip',
        descriptionOtherConvenience: 'Có hồ bơi',
        poolArea: 80,
        numberOfFloors: 4,
        facilityFree: '',
        rentType: 'Ngày',
        facilityType: 'Villa',
        facilityImage: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/02/8e/d7/b8.jpg'
      }
    },
    {
      contractId: 4,
      startDate: '2022-10-22',
      endDate: '2022-10-23',
      deposit: 800000,
      customer: {
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
      facility: {
        facilityId: 5,
        facilityName: 'Villa Beach Front Thymeleaf',
        facilityArea: 2000,
        rentCost: 10500000,
        maxPeople: 8,
        standardRoom: 'Vip',
        descriptionOtherConvenience: 'Có hồ bơi',
        poolArea: 100,
        numberOfFloors: 4,
        facilityFree: '',
        rentType: 'Ngày',
        facilityType: 'Villa',
        facilityImage: 'https://pix10.agoda.net/hotelImages/2601996/0/7b0a95ae1cbf0f0650ff89ff15cbfbfb.jpg?ca=7&ce=1&s=1024x768'
      }
    },
    {
      contractId: 5,
      startDate: '2022-10-23',
      endDate: '2022-10-24',
      deposit: 0,
      customer: {
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
      facility: {
        facilityId: 4,
        facilityName: 'Villa Beach Back Jquery',
        facilityArea: 1200,
        rentCost: 7500000,
        maxPeople: 7,
        standardRoom: 'Vip',
        descriptionOtherConvenience: 'Có hồ bơi',
        poolArea: 80,
        numberOfFloors: 4,
        facilityFree: '',
        rentType: 'Ngày',
        facilityType: 'Villa',
        facilityImage: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/02/8e/d7/b8.jpg'
      }
    },
    {
      contractId: 6,
      startDate: '2022-10-20',
      endDate: '2022-10-21',
      deposit: 120000,
      customer: {
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
      facility: {
        facilityId: 5,
        facilityName: 'Villa Beach Front Thymeleaf',
        facilityArea: 2000,
        rentCost: 10500000,
        maxPeople: 8,
        standardRoom: 'Vip',
        descriptionOtherConvenience: 'Có hồ bơi',
        poolArea: 100,
        numberOfFloors: 4,
        facilityFree: '',
        rentType: 'Ngày',
        facilityType: 'Villa',
        facilityImage: 'https://pix10.agoda.net/hotelImages/2601996/0/7b0a95ae1cbf0f0650ff89ff15cbfbfb.jpg?ca=7&ce=1&s=1024x768'
      }
    }
  ];

  constructor() {
  }

  findAll(): Contract[] {
    return this.contracts;
  }

  saveContract(contract): void {
    this.contracts.push(contract);
  }
}
