import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface BillInterface {
  id?: string;
  customer_id: string;
  bill_type: string;
  bill_amount: number;
  due_date?: any;
  payment_date?: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  _count?: {};
}

export interface BillGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  bill_type?: string;
  status?: string;
}
