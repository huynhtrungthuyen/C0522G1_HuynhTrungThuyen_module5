import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityFormGroup: FormGroup = new FormGroup({
    facilityName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    facilityArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    rentCost: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    standardRoom: new FormControl(''),
    descriptionOtherConvenience: new FormControl(''),
    poolArea: new FormControl(''),
    numberOfFloors: new FormControl(''),
    facilityFree: new FormControl(''),
    rentType: new FormControl('', Validators.required),
    facilityType: new FormControl('', Validators.required),
    facilityImage: new FormControl('', Validators.required)
  });

  facilityTypeList: FacilityType[];
  rentTypeList: RentType[];

  facilityType: FacilityType = {
    id: 4,
    facilityTypeName: ''
  };

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityService.findAllFacilityType().subscribe(value => {
      this.facilityTypeList = value;
    });

    this.facilityService.findAllRentType().subscribe(value => {
      this.rentTypeList = value;
    });
  }

  submit(): void {
    const facility = this.facilityFormGroup.value;
    this.facilityService.addFacility(facility).subscribe(() => {
      this.facilityFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      Swal.fire({
        title: 'Thêm mới thành công!',
        text: 'Dịch vụ: ' + facility.facilityName,
        imageUrl: facility.facilityImage,
        imageHeight: 250,
        imageWidth: 400
      });
      this.router.navigateByUrl('facility/list');
      console.log('Thêm mới dịch vụ thành công!');
    });
  }
}






















// checkStandardRoom(abstractControl: AbstractControl): any {
//   const temp = abstractControl.value.standardRoom;
//   const choose = this.facilityTypeDisplay;
//   alert(choose);
//
//   if (choose === 'Villa' || choose === 'House') {
//     return temp !== '' ? true : {standardRoomInvalid: true};
//   }
//
//   return true;
// }
//
// checkDescription(abstractControl: AbstractControl): any {
//   const temp = abstractControl.value.descriptionOtherConvenience;
//   const choose = this.facilityTypeDisplay;
//
//   if (choose === 'Villa' || choose === 'House') {
//     return temp !== '' ? true : {descriptionInvalid: true};
//   }
//
//   return true;
// }
//
// checkPoolArea(abstractControl: AbstractControl): any {
//   const temp = abstractControl.value.poolArea;
//   const choose = this.facilityTypeDisplay;
//
//   if (choose === 'Villa') {
//     return /^[1-9]\d*$/.test(temp) ? true : {poolAreaInvalid: true};
//   }
//
//   return true;
// }
//
//
// checkNumberOfFloors(abstractControl: AbstractControl): any {
//   const temp = abstractControl.value.numberOfFloors;
//   const choose = this.facilityTypeDisplay;
//
//   if (choose === 'Villa' || choose === 'House') {
//     return /^[1-9]\d*$/.test(temp) ? true : {numberOfFloorsInvalid: true};
//   }
//
//   return true;
// }
//
// checkFacilityFree(abstractControl: AbstractControl): any {
//   const temp = abstractControl.value.facilityFree;
//   const choose = this.facilityTypeDisplay;
//
//   if (choose === 'Room') {
//     return temp !== '' ? true : {facilityFreeInvalid: true};
//   }
//
//   return true;
// }
