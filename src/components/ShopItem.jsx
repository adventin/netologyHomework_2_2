export default function ShopItem(props) {
  const { item } = props;

  return (
    <div className='item'>
      <div className='item__image'>
        <img src={item.img} />
      </div>
      <div className='item__title'>{item.name}</div>
      <div className='item__color'>{item.color}</div>      
      <div className="item__price">${item.price}</div>
      <button className="item__add-to-cart">ADD TO CART</button>
    </div>
  )
}
