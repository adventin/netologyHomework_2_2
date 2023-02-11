import ShopItem from "./ShopItem";

export default function ListView(props) {
  const items = props.items.map((item, index) => (
    <ShopItem key={item.name + item.price + item.color} item={item} />
  ));

  return (
    <div className="items">{items}</div>
  )
}
