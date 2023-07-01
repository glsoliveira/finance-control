import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { X, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New transaction</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="">
          <input type="text" placeholder="Description" />
          <input type="number" placeholder="$" />
          <input type="text" placeholder="Category" />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} /> Deposit
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} /> Debited
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
