import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilitys = this.facilityService.findAll().slice(0, 3);
  curPage = 1;
  totalPage = Math.ceil(this.facilityService.findAll().length / 3);

  facilityNameDelete: string;
  facilityImageDelete: string;
  facilityIdDelete: number;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
  }

  next(): void {
    this.curPage++;
    this.facilitys = this.facilityService.findAll().slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  previos(): void {
    this.curPage--;
    this.facilitys = this.facilityService.findAll().slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  getInfoFacilityDelete(facilityImage: string, facilityName: string, facilityId: number): void {
    this.facilityImageDelete = facilityImage;
    this.facilityNameDelete = facilityName;
    this.facilityIdDelete = facilityId;
  }

  deleteFacility(): void {
    this.facilityService.deleteFacility(this.facilityIdDelete);
    this.totalPage = Math.ceil(this.facilityService.findAll().length / 3);
    this.facilitys = this.facilityService.findAll().slice((this.curPage - 1) * 3, this.curPage * 3);
    alert('Xóa dịch vụ  [' + this.facilityNameDelete + ']  thành công!');
  }
}
