import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsTable,
  TrasactionsContainer,
} from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  created_at: string;
}

export function Transactions() {
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
    <>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.created_at}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TrasactionsContainer>
    </>
  );
}
