import {Customer} from './customer';
import {Time} from './time';

export interface SaveAccount {
  accountId?: number;
  customer?: Customer;
  accountCreateDate?: string;
  accountStartDate?: string;
  times?: Time;
  accountMoney?: number;
  accountPercent?: number;
  accountPromotion?: string;
}
