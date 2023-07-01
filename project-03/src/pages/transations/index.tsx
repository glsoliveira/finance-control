import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsTable,
  TrasactionsContainer,
} from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Developing website</td>
              <td>
                <PriceHighLight variant="income"> $17,000.00</PriceHighLight>
              </td>
              <td>Category</td>
              <td>04/09/2023</td>
            </tr>
            <tr>
              <td width="50%">Developing website</td>
              <td>
                <PriceHighLight variant="outcome"> $17,000.00</PriceHighLight>
              </td>
              <td>Category</td>
              <td>04/09/2023</td>
            </tr>
            <tr>
              <td width="50%">Developing website</td>
              <td>
                <PriceHighLight variant="income"> $17,000.00</PriceHighLight>
              </td>
              <td>Category</td>
              <td>04/09/2023</td>
            </tr>
            <tr>
              <td width="50%">Developing website</td>
              <td>
                <PriceHighLight variant="outcome"> $17,000.00</PriceHighLight>
              </td>
              <td>Category</td>
              <td>04/09/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TrasactionsContainer>
    </>
  );
}
