import { ReactComponent as PlusIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/plus.svg"
import { ReactComponent as MinusIcon } from "/Users/yoru/alpha_camp/alpha_shop/src/icons/minus.svg"

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
  return (
    <section class="cart-container col col-lg-5 col-sm-12">
      <h3 class="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price="0">
        {productData.map(data => 
          <ProductInfo key={data.id} {...data}/>)}
        </section>

      <section class="cart-info shipping col col-12">
        <div class="text">運費</div>
        <div class="price"></div>
      </section>
      <section class="cart-info total col col-12">
        <div class="text">小計</div>
        <div class="price"></div>
      </section>
    </section>
  )
}