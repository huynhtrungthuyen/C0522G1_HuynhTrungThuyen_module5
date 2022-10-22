import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityFormGroup: FormGroup;
  facilityId: number;
  facilityType: string;
  rentTypeList: string[] = ['Giờ', 'Ngày', 'Tháng', 'Năm'];

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityId = Number(this.activatedRoute.snapshot.params.id);
    const facility = this.facilityService.findById(this.facilityId);
    this.facilityType = facility.facilityType;

    this.facilityFormGroup = new FormGroup({
      facilityId: new FormControl(facility.facilityId),
      facilityName: new FormControl(facility.facilityName),
      facilityArea: new FormControl(facility.facilityArea),
      rentCost: new FormControl(facility.rentCost),
      maxPeople: new FormControl(facility.maxPeople),
      standardRoom: new FormControl(facility.standardRoom),
      descriptionOtherConvenience: new FormControl(facility.descriptionOtherConvenience),
      poolArea: new FormControl(facility.poolArea),
      numberOfFloors: new FormControl(facility.numberOfFloors),
      facilityFree: new FormControl(facility.facilityFree),
      rentType: new FormControl(facility.rentType),
      facilityType: new FormControl(facility.facilityType),
      facilityImage: new FormControl(facility.facilityImage)
    });
  }

  updateProduct(id: any): void {
    const facility = this.facilityFormGroup.value;
    this.facilityService.updateFacility(id, facility);
    alert('Cập nhật thành công!');
    this.router.navigateByUrl('facility');
  }
}
