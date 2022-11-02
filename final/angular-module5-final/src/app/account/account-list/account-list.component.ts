import {Component, OnInit} from '@angular/core';
import {SaveAccount} from '../../model/save-account';
import {AccountService} from '../../service/account.service';
import Swal from 'sweetalert2';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  // customerNameSearch = '';
  // customerList: Customer[];
  // timeList: Time[];
  // accountListPaging: SaveAccount[];
  // numberRecord = 5;
  // curPage = 1;
  // totalPage: number;
  // idDelete: number;

  idDelete: number;
  page = 1;
  pageSize = 5;
  total$: Observable<number>;
  saveAccount$: Observable<SaveAccount[]>;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.getAllAccount();
  }

  getAllAccount() {
    this.accountService.findAccountSearchPaging(this.page, this.pageSize).subscribe(value => {
        this.saveAccount$ = new BehaviorSubject<SaveAccount[]>(value.content);
        this.total$ = new BehaviorSubject<number>(value.totalElements);
      },
      error => {
      });
  }

  getAccountDelete(customerId: number): void {
    this.idDelete = customerId;
  }

  deleteAccount(): void {
    this.accountService.deleteAccount(this.idDelete).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Tài khoản tiết kiệm: Mã số ' + this.idDelete,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      this.getAllAccount();
    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa tài khoản thành công!');
    });
  }

  // searchByMore(): void {
  //   this.curPage = 1;
  //   this.ngOnInit();
  // }
  //
  // resetSearchInput(): void {
  //   this.customerNameSearch = '';
  // }
}
