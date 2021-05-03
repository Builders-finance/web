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
  transaction_description?: string,
  transaction_rev_exp_id: string,
  transaction_user_id: string,
  transaction_valor: number,
  transaction_forma_pagamento: PaymentType,
  transaction_status_pagamento: PaymentStatus,
  transaction_data: Date,
  revexp_name?: string
}
