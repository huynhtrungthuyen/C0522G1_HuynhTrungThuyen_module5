import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import {ContractService} from '../../service/contract.service';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractFormGroup: FormGroup = new FormGroup({
    contractId: new FormControl(''),
    dateFormGroup: new FormGroup({
      startDate: new FormControl('', this.checkStartDate),
      endDate: new FormControl('')
    }, this.checkEndDate),
    deposit: new FormControl('', [Validators.required, Validators.pattern('^0$|^[1-9]\\d*$')]),
    customer: new FormControl('', Validators.required),
    facility: new FormControl('', Validators.required)
  });

  customerList: Customer[];
  facilityList: Facility[];

  curDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

  constructor(private contractService: ContractService,
              private customerService: CustomerService,
              private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.findAllCustomer().subscribe(value => {
      this.customerList = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Lấy danh sách khách hàng!');
    });

    this.facilityService.findAllFacility().subscribe(value => {
      this.facilityList = value.filter(item =>
        item.facilityType.facilityTypeName === 'Villa' || item.facilityType.facilityTypeName === 'House');
    }, error => {
      console.log(error);
    }, () => {
      console.log('Lấy danh sách dịch vụ!');
    });
  }

  submit(): void {
    const contract: Contract = {
      id: this.contractFormGroup.value.contractId,
      startDate: this.contractFormGroup.value.dateFormGroup.startDate,
      endDate: this.contractFormGroup.value.dateFormGroup.endDate,
      deposit: this.contractFormGroup.value.deposit,
      customer: this.contractFormGroup.value.customer,
      facility: this.contractFormGroup.value.facility
    };
    this.contractService.addContract(contract).subscribe(() => {
      this.contractFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('contract/list');
      console.log('Thêm mới hợp đồng thành công thành công!');
    });
  }

  checkStartDate(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const formMonth = new Date(abstractControl.value).getMonth() + 1;
    const formDay = new Date(abstractControl.value).getDate();

    if (formYear > new Date().getFullYear()) {
      return null;
    }

    if (formYear < new Date().getFullYear()) {
      return {invalidStartDate: true};
    }

    if (formMonth > new Date().getMonth() + 1) {
      return null;
    }

    if (formMonth < new Date().getMonth() + 1) {
      return {invalidStartDate: true};
    }

    return (formDay >= new Date().getDate()) ? true : {invalidStartDate: true};
  }

  checkEndDate(abstractControl: AbstractControl): any {
    const formStartYear = new Date(abstractControl.value.startDate).getFullYear();
    const formStartMonth = new Date(abstractControl.value.startDate).getMonth() + 1;
    const formStartDay = new Date(abstractControl.value.startDate).getDate();

    const formEndYear = new Date(abstractControl.value.endDate).getFullYear();
    const formEndMonth = new Date(abstractControl.value.endDate).getMonth() + 1;
    const formEndDay = new Date(abstractControl.value.endDate).getDate();

    if (formEndYear > formStartYear) {
      return null;
    }

    if (formEndYear < formStartYear) {
      return {invalidEndDate: true};
    }

    if (formEndMonth > formStartMonth) {
      return null;
    }

    if (formEndMonth < formStartMonth) {
      return {invalidEndDate: true};
    }

    return (formEndDay >= formStartDay) ? true : {invalidEndDate: true};
  }
}
