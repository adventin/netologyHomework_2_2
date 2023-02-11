import ShopCard from "./ShopCard";

export default function CardsView(props) {
  const cards = props.cards.map((card, index) => (
    <ShopCard key={card.name+card.price+card.color} card={card} />
  ));

  return (
    <div className="cards">{cards}</div>
  )
}
