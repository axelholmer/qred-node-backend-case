import { TransactionResponseDto } from "./dtos";
import * as TransactionQueries from "./queries";

export const getTransactionsByCardId = async (
  cardId: string
): Promise<TransactionResponseDto[]> => {
  const transactions = await TransactionQueries.getTransactionsByCardId(cardId);
  return transactions.map((transaction) => ({
    id: transaction.id,
    cardId: transaction.card_id,
    transactionDate: transaction.transaction_date,
    amount: transaction.amount,
    currency: transaction.currency,
    description: transaction.description,
  }));
};
