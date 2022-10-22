import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityFormGroup: FormGroup = new FormGroup({
    facilityId: new FormControl(''),
    facilityName: new FormControl(''),
    facilityArea: new FormControl(''),
    rentCost: new FormControl(''),
    maxPeople: new FormControl(''),
    standardRoom: new FormControl(''),
    descriptionOtherConvenience: new FormControl(''),
    poolArea: new FormControl(''),
    numberOfFloors: new FormControl(''),
    facilityFree: new FormControl(''),
    rentType: new FormControl(''),
    facilityType: new FormControl(''),
    facilityImage: new FormControl('')
  });

  facilityTypeList: string[] = ['Villa', 'House', 'Room'];

  rentTypeList: string[] = ['Giờ', 'Ngày', 'Tháng', 'Năm'];

  status: string;

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    const facility = this.facilityFormGroup.value;
    this.facilityService.saveFacility(facility);
    alert('Thêm mới dịch vụ  [' + facility.facilityName + ']  thành công!');
    this.facilityFormGroup.reset();
    this.router.navigateByUrl('facility');
  }
}
