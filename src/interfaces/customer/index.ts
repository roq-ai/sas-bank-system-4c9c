import { BillInterface } from 'interfaces/bill';
import { TransactionInterface } from 'interfaces/transaction';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  user_id: string;
  account_number: string;
  account_type: string;
  balance: number;
  credit_card_status: string;
  credit_card_limit?: number;
  created_at?: any;
  updated_at?: any;
  bill?: BillInterface[];
  transaction?: TransactionInterface[];
  user?: UserInterface;
  _count?: {
    bill?: number;
    transaction?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  account_number?: string;
  account_type?: string;
  credit_card_status?: string;
}
