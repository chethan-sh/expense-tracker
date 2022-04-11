export {}

export interface transactionItem{
    transactionName:string;
    transactionType:string;
    transactionAmount:number;
  }
export interface IincomeExpense{
    balance:number,
    income:number,
    expense:number,
  }

export interface IexpenseTrackerState extends IincomeExpense{
    transactionList: transactionItem[],
} 
export interface IheadindgProps{
    headingtext:string;
}

export interface IstateTransactionDetails{
  transactionType:string;
  transactionAmount:number,
  transactionName:string
}
 export interface ItransactionHistoryProps{
    transactionList:transactionItem[],
 }
