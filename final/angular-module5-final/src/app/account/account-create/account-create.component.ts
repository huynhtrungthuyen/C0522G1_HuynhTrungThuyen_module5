import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {Time} from '../../model/time';
import {AccountService} from '../../service/account.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {
  accountFormGroup: FormGroup;
  customerList: Customer[];
  timeList: Time[];

  curDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

  constructor(private accountService: AccountService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.accountService.findAllCustomer().subscribe(value => {
      this.customerList = value;
    });

    this.accountService.findAllTime().subscribe(value => {
      this.timeList = value;
    });

    this.accountFormGroup = new FormGroup({
      customer: new FormControl('', Validators.required),
      // customer: new FormGroup({
      //   id: new FormControl(account.customer.customerId),
      //   name: new FormControl(account.customer.customerName,
      //     [Validators.required, Validators.pattern('^([A-Z][a-z]+ )+[A-Z][a-z]*$')])
      // }),
      accountCreateDate: new FormControl('', this.checkCreateDate),
      accountStartDate: new FormControl('', this.checkStartDate),
      times: new FormControl('', Validators.required),
      accountMoney: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d{7}\\d*$')]),
      accountPercent: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
      accountPromotion: new FormControl('', Validators.required)
    });
  }

  addAccount(): void {
    const account = this.accountFormGroup.value;
    this.accountService.addAccount(account).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm mới thành công!',
        text: 'Tài khoản tiết kiệm: Mã số ' + account.id,
        showConfirmButton: false,
        timer: 2000
      });

      this.accountFormGroup.reset();
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigateByUrl('');
      console.log('Thêm mới tài khoản thành công!');
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

  checkCreateDate(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const formMonth = new Date(abstractControl.value).getMonth() + 1;
    const formDay = new Date(abstractControl.value).getDate();

    if (formYear < new Date().getFullYear()) {
      return null;
    }

    if (formYear > new Date().getFullYear()) {
      return {invalidCreateDate: true};
    }

    if (formMonth < new Date().getMonth() + 1) {
      return null;
    }

    if (formMonth > new Date().getMonth() + 1) {
      return {invalidCreateDate: true};
    }

    return (formDay <= new Date().getDate()) ? true : {invalidCreateDate: true};
  }
}
