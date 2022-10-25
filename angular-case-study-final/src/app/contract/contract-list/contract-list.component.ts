import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../service/contract.service';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[];
  customerListPaging: Contract[];
  curPage = 1;
  totalPage: number;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contractService.findAllContract().subscribe(value => {
      this.totalPage = Math.ceil(value.length / 5);
      this.customerListPaging = value.slice(0, 5);
      this.contractList = value;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị danh sách hợp đồng!');
    });
  }

  next(): void {
    this.curPage++;
    this.customerListPaging = this.contractList.slice((this.curPage - 1) * 5, this.curPage * 5);
  }

  previos(): void {
    this.curPage--;
    this.customerListPaging = this.contractList.slice((this.curPage - 1) * 5, this.curPage * 5);
  }
}
