import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  created_at: string;
}

interface TransactionContextType {
  transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // call async function
  async function fetchData() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();
    console.log(data);
    setTransactions(data);
  }

  useEffect(() => {
    // fetch("http://localhost:3000/transactions")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    fetchData();
  }, []);
  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
