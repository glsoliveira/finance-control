import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
// import { memo } from "react";

const seachFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof seachFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions;
    }
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(seachFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
    // new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search here"
        {...register("query")}
        disabled={isSubmitting}
      />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  );
}

// export const SearchForm = memo(SearchFormComponent);
