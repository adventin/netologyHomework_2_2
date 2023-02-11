export default function ShopCard(props) {
  const { card } = props;

  return (
    <div className='card'>
      <div className='card__title'>{card.name}</div>
      <div className='card__color'>{card.color}</div>
      <div className='card__image'>
        <img src={card.img}/>
      </div>
      <div className='card__price-bar'>
        <div className="card__price">${card.price}</div>
        <button className="card__add-to-cart">ADD TO CART</button>
      </div>
    </div>
  )
}