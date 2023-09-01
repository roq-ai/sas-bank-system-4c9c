import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  customer_id: string;
  transaction_type: string;
  transaction_amount: number;
  transaction_date?: any;
  transaction_status: string;
  transaction_description?: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  transaction_type?: string;
  transaction_status?: string;
  transaction_description?: string;
}
