import { CardResponseDto } from "./dtos";
import * as CardQueries from "./queries";
import * as TransactionService from "../transaction/service";
import { TransactionResponseDto } from "../transaction/dtos";

export const getCard = async (
  cardId: string
): Promise<CardResponseDto | null> => {
  const card = await CardQueries.getCardById(cardId);
  if (!card) {
    return null;
  }
  return {
    id: card.id,
    cardImageUrl: card.card_image_url,
    currentSpend: card.current_spend,
    spendLimit: card.spend_limit,
    currency: card.currency,
    invoiceDueDate: card.invoice_due_date,
    expirationDate: card.expiration_date,
    status: card.status,
    cardNumber: card.card_number,
  };
};

export const getCardsByCompanyId = async (
  companyId: string
): Promise<CardResponseDto[]> => {
  const cards = await CardQueries.getCardsByCompanyId(companyId);

  return cards.map((card) => ({
    id: card.id,
    cardImageUrl: card.card_image_url,
    currentSpend: card.current_spend,
    spendLimit: card.spend_limit,
    currency: card.currency,
    invoiceDueDate: card.invoice_due_date,
    expirationDate: card.expiration_date,
    status: card.status,
    cardNumber: card.card_number,
  }));
};

export const getCardTransactions = async (
  cardId: string
): Promise<TransactionResponseDto[]> => {
  // instead of calling another service we could also get transactions in card queries
  const transactions = await TransactionService.getTransactionsByCardId(cardId);
  return transactions;
};
