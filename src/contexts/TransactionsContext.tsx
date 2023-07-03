import { ReactNode, useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  created_at: string;
}

interface CreateTransactionInput {
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // call async function
  // async function fetchTransactions(query?: string) {
  const fetchTransactions = useCallback(async (query?: string) => {
    // const url = new URL("/transactions");
    // if (query) {
    //   url.searchParams.append("q", query);
    // }
    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
    // setTransactions(data);
    const response = await api.get("/transactions", {
      params: {
        _sort: "created_at",
        _order: "desc",
        q: query,
      },
    });
    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data;
      const response = await api.post("/transactions", {
        description,
        price,
        category,
        type,
        created_at: new Date(),
      });
      setTransactions((state) => [response.data, ...state]);
    },
    []
  );

  // async function createTransaction(data: CreateTransactionInput) {
  //   const { description, price, category, type } = data;
  //   const response = await api.post("/transactions", {
  //     description,
  //     price,
  //     category,
  //     type,
  //     created_at: new Date(),
  //   });
  //   setTransactions((state) => [response.data, ...state]);
  // }

  useEffect(() => {
    // fetch("http://localhost:3000/transactions")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    fetchTransactions();
  }, []);
  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
