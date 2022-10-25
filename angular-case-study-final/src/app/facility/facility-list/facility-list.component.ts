import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[];
  facilityListPaging: Facility[];
  curPage = 1;
  totalPage: number;

  facilityNameDelete: string;
  facilityImageDelete: string;
  facilityIdDelete: number;

  facilityNameSearch = '';

  mess: string;

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityService.findAllFacility().subscribe(value => {
      this.totalPage = Math.ceil(value.length / 3);
      this.facilityListPaging = value.slice(0, 3);
      this.facilityList = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị danh sách dịch vụ!');
    });

    this.mess = '';
  }

  next(): void {
    this.curPage++;
    this.facilityListPaging = this.facilityList.slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  previos(): void {
    this.curPage--;
    this.facilityListPaging = this.facilityList.slice((this.curPage - 1) * 3, this.curPage * 3);
  }

  getInfoFacilityDelete(facilityImage: string, facilityName: string, facilityId: number): void {
    this.facilityImageDelete = facilityImage;
    this.facilityNameDelete = facilityName;
    this.facilityIdDelete = facilityId;
  }

  deleteFacility(): void {
    this.facilityService.deleteFacility(this.facilityIdDelete).subscribe(() => {
      this.ngOnInit();
      this.mess = 'Xóa dịch vụ  [' + this.facilityNameDelete + '] thành công!';
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa dịch vụ thành công!');
    });
  }

  searchName(): void {
    this.facilityService.findAllFacility().subscribe(value => {
      this.facilityList = value.filter(item => item.facilityName.toLowerCase().includes(this.facilityNameSearch.toLowerCase()));
      this.totalPage = Math.ceil(this.facilityList.length / 3);
      this.facilityListPaging = this.facilityList.slice(0, 3);
    }, error => {
      console.log(error);
    }, () => {
      console.log('Tìm kiếm dịch vụ có tên là: "' + this.facilityNameSearch + '" (có ' + this.facilityList.length + ' kết quả).');
    });
  }
}
