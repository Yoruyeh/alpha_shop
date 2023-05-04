
function FormContent({ text, price, time }) {
  return (
    <label class="radio-group col col-12" data-price={price}>
      <input id="shipping-standard" type="radio" name="shipping"  checked/>
      <div class="radio-info">
        <div class="col col-12">
          <div class="text">{text}</div>
          {price === 0 ? 
            <div class="price">免費</div> :
            <div class="price">$ {price}</div>
          }
        </div>
        <div class="period col col-12">{time}</div>
      </div>
      <div class="radio-box-border"></div>
    </label>
  )
}


export default function  Step2() {
  return (
    <form class="col col-12" data-phase="shipping">
      <h3 class="form-title">運送方式</h3>
      <section class="form-body col col-12">
        <FormContent text={'標準運送'} price={0} time={'約 3~7 個工作天'}/>
        <FormContent text={'DHL 貨運'} price={500} time={'48 小時內送達'}/>
      </section>
    </form>
  )
}