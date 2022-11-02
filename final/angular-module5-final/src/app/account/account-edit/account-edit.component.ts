import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {Time} from '../../model/time';
import {AccountService} from '../../service/account.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  accountFormGroup: FormGroup;
  accountId: number;
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

    this.accountId = Number(this.activatedRoute.snapshot.params.id);

    this.accountService.getById(this.accountId).subscribe(account => {
      this.accountFormGroup = new FormGroup({
        customer: new FormControl(account.customer.customerId),
        // customer: new FormGroup({
        //   id: new FormControl(account.customer.customerId),
        //   name: new FormControl(account.customer.customerName,
        //     [Validators.required, Validators.pattern('^([A-Z][a-z]+ )+[A-Z][a-z]*$')])
        // }),
        accountCreateDate: new FormControl(account.accountCreateDate, this.checkCreateDate),
        accountStartDate: new FormControl(account.accountStartDate, this.checkStartDate),
        times: new FormControl(account.times.timesId, Validators.required),
        accountMoney: new FormControl(account.accountMoney, [Validators.required, Validators.pattern('^[1-9]\\d{7}\\d*$')]),
        accountPercent: new FormControl(account.accountPercent, [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
        accountPromotion: new FormControl(account.accountPromotion, Validators.required)
      });
    }, error => {
      console.log(error);
    }, () => {
      console.log('OK!');
    });
  }

  updateAccount(id: number) {
    const account = this.accountFormGroup.value;
    this.accountService.updateAccount(id, account).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Chỉnh sửa thành công!',
        text: 'Tài khoản tiết kiệm: Mã số ' + account.id,
        showConfirmButton: false,
        timer: 2000
      });

      this.router.navigateByUrl('');
    }, error => {
      console.log(error);
    }, () => {
      console.log('Cập nhật tài khoản thành công!');
    });
  }

  compareWithId(item1, item2): boolean {
    return item1 && item2 && item1.id === item2.id;
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
