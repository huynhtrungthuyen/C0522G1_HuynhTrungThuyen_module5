import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilitys: Facility[] = [
    {
      facilityId: 1,
      facilityName: 'Studio Queen',
      facilityArea: 100,
      rentCost: 500000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Giờ',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/FRF_studioroom_ibe4.jpg'
    },
    {
      facilityId: 2,
      facilityName: 'Superior',
      facilityArea: 150,
      rentCost: 400000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Ngày',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/ibe_Superior.jpg'
    },
    {
      facilityId: 3,
      facilityName: 'Deluxe',
      facilityArea: 200,
      rentCost: 600000,
      maxPeople: 3,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Ngày',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/ibe-Deluxe-Room.jpg'
    },
    {
      facilityId: 4,
      facilityName: 'Deluxe Tropical',
      facilityArea: 80,
      rentCost: 200000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Giờ',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/Tropical-Deluxe_IBE.jpg'
    },
    {
      facilityId: 5,
      facilityName: 'Studio Classic',
      facilityArea: 90,
      rentCost: 300000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Ngày',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/FRF_studioroom_ibe14.jpg'
    },
    {
      facilityId: 6,
      facilityName: 'Executive Club',
      facilityArea: 250,
      rentCost: 550000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Giờ',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/ibe_Exec_Club.jpg'
    },
    {
      facilityId: 7,
      facilityName: 'Family Room',
      facilityArea: 300,
      rentCost: 650000,
      maxPeople: 4,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Đánh bài quỳ vỏ mít',
      rentType: 'Ngày',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/ibe_Family.jpg'
    },
    {
      facilityId: 8,
      facilityName: 'Premier Family Room',
      facilityArea: 300,
      rentCost: 700000,
      maxPeople: 4,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Dắt chó đi dạo',
      rentType: 'Ngày',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/FRF_studioroom_ibe9.jpg'
    },
    {
      facilityId: 9,
      facilityName: 'Executive Suite',
      facilityArea: 150,
      rentCost: 350000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Giờ',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/ibe_frf_Executive-Suite.jpg'
    },
    {
      facilityId: 10,
      facilityName: 'Executive Family Suite',
      facilityArea: 150,
      rentCost: 350000,
      maxPeople: 2,
      standardRoom: '',
      descriptionOtherConvenience: '',
      poolArea: 0,
      numberOfFloors: 0,
      facilityFree: 'Massage người mù',
      rentType: 'Giờ',
      facilityType: 'Room',
      facilityImage: 'https://www.furama.com/images/FRF_ibe_Executive-Family-Suite.jpg'
    }
  ];

  constructor() {
  }

  findAll(): Facility[] {
    return this.facilitys;
  }

  saveFacility(facility): void {
    this.facilitys.push(facility);
  }

  findById(id: number): Facility {
    return this.facilitys.find(item => item.facilityId === id);
  }

  updateFacility(id: number, facility: Facility): void {
    for (let i = 0; i < this.facilitys.length; i++) {
      if (this.facilitys[i].facilityId === id) {
        this.facilitys[i] = facility;
        break;
      }
    }
  }

  deleteFacility(id: number): void {
    for (let i = 0; i < this.facilitys.length; i++) {
      if (this.facilitys[i].facilityId === id) {
        this.facilitys.splice(i, 1);
        break;
      }
    }
  }
}
