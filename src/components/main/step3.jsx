

function Form3( {label, placeholder} ) {
  if (placeholder.length > 5) {
    return (
      <div class="input-group input-w-lg-4 input-w-sm-full" key={label}>
        <div class="input-label">{label}</div>
          <input type="text" placeholder={placeholder} />
       </div>
    )
  } else {
    return (
      <div class="input-group input-w-lg-3 input-w-sm-s3" key={label}>
        <div class="input-label">{label}</div>
          <input type="text" placeholder={placeholder} />
       </div>
    )
  }
}

export default function Step3() {
  return (
    <form class="col col-12" data-phase="credit-card">
      <h3 class="form-title">付款資訊</h3>
      <section class="form-body col col-12">
        <div class="col col-12">
          <Form3 label={"持卡人姓名"} placeholder={"John Doe"}/>
        </div>
        <div class="col col-12">
          <Form3 label={"卡號"} placeholder={"1111 2222 3333 4444"}/>
        </div>
        <div class="col col-12">
          <Form3 label={"有效期限"} placeholder={"MM/YY"}/>
          <Form3 label={"CVC / CCV"} placeholder={"123"}/>
        </div>
      </section>
    </form>
  )
}