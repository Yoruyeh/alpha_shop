

function Form3( {label, placeholder} ) {
  if (placeholder.length > 5) {
    return (
      <div className="input-group input-w-lg-4 input-w-sm-full" key={label}>
        <div className="input-label">{label}</div>
          <input type="text" placeholder={placeholder} />
       </div>
    )
  } else {
    return (
      <div className="input-group input-w-lg-3 input-w-sm-s3" key={label}>
        <div className="input-label">{label}</div>
          <input type="text" placeholder={placeholder} />
       </div>
    )
  }
}

export default function Step3() {
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <Form3 label={"持卡人姓名"} placeholder={"John Doe"}/>
        </div>
        <div className="col col-12">
          <Form3 label={"卡號"} placeholder={"1111 2222 3333 4444"}/>
        </div>
        <div className="col col-12">
          <Form3 label={"有效期限"} placeholder={"MM/YY"}/>
          <Form3 label={"CVC / CCV"} placeholder={"123"}/>
        </div>
      </section>
    </form>
  )
}