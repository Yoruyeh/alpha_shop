
function Form2({ text, price, time }) {
  return (
    <label className="radio-group col col-12" data-price={price} key={price}>
      <input id="shipping-standard" type="radio" name="shipping" defaultChecked={true}/>
      <div className="radio-info">
        <div className="col col-12">
          <div className="text">{text}</div>
          {price === 0 ? 
            <div className="price">免費</div> :
            <div className="price">$ {price}</div>
          }
        </div>
        <div className="period col col-12">{time}</div>
      </div>
      <div className="radio-box-border"></div>
    </label>
  )
}


export default function  Step2() {
  return (
    <form className="col col-12" data-phase="shipping">
      <h3 className="form-title">運送方式</h3>
      <section className="form-body col col-12">
        <Form2 text={'標準運送'} price={0} time={'約 3~7 個工作天'}/>
        <Form2 text={'DHL 貨運'} price={500} time={'48 小時內送達'}/>
      </section>
    </form>
  )
}