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

export interface IbalanceProps{
    balance:number;
}
export interface IexpenseTrackerState extends IincomeExpense{
    transactionList: transactionItem[],
} 
export interface IheadindgProps{
    headingtext:string;
}
export interface IaddTransactionProp{
    vaildateTransactionDetails:({}:transactionItem)=>void;
    getTransactionDetails:()=>transactionItem;
}
export interface IstateTransactionDetails{
  transactionType:string;
}
 export interface ItransactionHistoryProps{
    transactionList:transactionItem[],
 }
