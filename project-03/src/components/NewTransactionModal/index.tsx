import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";
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
          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
