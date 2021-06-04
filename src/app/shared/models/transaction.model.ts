import { RevExp } from "./revExp.model";

export enum PaymentStatus {
  paid = 'paid',
  unpaid = 'unpaid',
  partial = 'partial'
}

export enum PaymentType {
  credit = 'credit',
  debit = 'debit',
  cash = 'cash',
  pix = 'pix',
  bill = 'bill'
}

export interface Transaction {
  description?: string,
  rev_exp_id: string,
  valor: number,
  forma_pagamento: PaymentType,
  status_pagamento: PaymentStatus,
  created_at?: Date,
  updated_at?: Date,
  data?: Date,
  nome?: string,
  id?: string,
  icon?: string,
  rec_des?: number;
  user_id?: string;
  status?: number;
  revExp?: RevExp
}
