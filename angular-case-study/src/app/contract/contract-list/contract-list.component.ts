import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts = this.contractService.findAll().slice(0, 5);
  curPage = 1;
  totalPage = Math.ceil(this.contractService.findAll().length / 5);

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
  }

  next(): void {
    this.curPage++;
    this.contracts = this.contractService.findAll().slice((this.curPage - 1) * 5, this.curPage * 5);
  }

  previos(): void {
    this.curPage--;
    this.contracts = this.contractService.findAll().slice((this.curPage - 1) * 5, this.curPage * 5);
  }
}
