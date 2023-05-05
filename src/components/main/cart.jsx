import { ReactComponent as PlusIcon } from "../../icons/plus.svg"
import { ReactComponent as MinusIcon } from "../../icons/minus.svg"

const productData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

function ProductInfo( {id, name, img, price, quantity} ) {
  return (
    <div className="product-container col col-12" key={id} data-count={quantity} data-price={price}>
      <img className="img-container" alt={name} src={img} />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
              <MinusIcon className="product-action minus"/>
            <span className="product-count">{quantity}</span>
              <PlusIcon className="product-action plus"/>
          </div>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  )
}


export default function Cart() {
  let sum = 0
  productData.forEach(data => {
  sum += (data.price * data.quantity) 
})

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price="0">
        {productData.map(data => 
          <ProductInfo key={data.id} {...data}/>)}
        </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">{sum}</div>
      </section>
    </section>
  )
}