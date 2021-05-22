export function compAction(discardTop, hand) {
  for (const card in hand) {
    if (
      hand[card].color === discardTop.color ||
      hand[card].number === discardTop.number
    ) {
      const newHand = hand.filter((handCard) => {
        return hand[card].id !== handCard.id;
      });
      const discardCards = hand.filter((handCard) => {
        return hand[card].id === handCard.id;
      });
      return { newHand, discardCards, playedCard: hand[card] };
    }
  }
  return hand;
}

export function compCantPlay(hand, discardTop) {
  for (const card in hand) {
    if (
      hand[card].color === discardTop.color ||
      hand[card].number === discardTop.number
    ) {
      return false;
    }
  }
  return true;
}
