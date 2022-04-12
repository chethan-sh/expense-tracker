export {};
export interface ITransactionItem {
  transactionName: string;
  transactionType: string;
  transactionAmount: number;
}
export interface ITrackerData {
  balance: number;
  income: number;
  expense: number;
}
export interface IExpenseTrackerState extends ITrackerData {
  transactionList: ITransactionItem[];
}
export interface IheadindgProps {
  headingtext: string;
}
export interface ITransactionHistoryProps {
  transactionList: ITransactionItem[];
}
