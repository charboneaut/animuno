import { v4 } from "uuid";

export function createDraw(drawSize) {
  const colors = ["red", "blue", "green"];
  let drawPile = [];
  for (let i = 0; i < drawSize; i++) {
    drawPile.push({
      color: colors[Math.floor(Math.random() * colors.length)],
      number: Math.floor(Math.random() * 10 + 1),
      id: v4(),
    });
  }
  return drawPile;
}

export function playCard(discardTop, hand, card) {
  if (card.color === discardTop.color || card.number === discardTop.number) {
    const newHand = hand.filter((handCard) => {
      return card.id !== handCard.id;
    });
    const discardCards = hand.filter((handCard) => {
      return card.id === handCard.id;
    });
    return { newHand, discardCards };
  }
}

export function determineColor(card, xray) {
  if (xray) {
    return card.color;
  } else {
    return "whitesmoke";
  }
}
