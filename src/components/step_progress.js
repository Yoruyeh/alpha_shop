import { ReactComponent as PGCompleteIcon} from '../icons/pg-complete.svg'

function Progress({number, phase, step}) {
  return (
    <>
    <span className="progress-group" data-phase={phase}>
      <span className="progress-icon">
        <span className="text">{number}</span>
          <PGCompleteIcon className="icon cursor-point"/>
      </span>
      <span className="progress-label">{step}</span>
    </span>
    {number !== 3 && (
      <span className="progress-bar" data-order={number}></span>
    )}
    </>
  )
}

export default function StepProgress() {
  return(
<>
  <h2 className="register-title col col-12">結帳</h2>
  <section className="progress-container col col-12">
    <Progress number={1} phase={'address'} step={'寄送地址'}/>
    <Progress number={2} phase={'shipping'} step={'運送方式'}/>
    <Progress number={3} phase={'credit-card'} step={'付款資訊'}/>
  </section>
  </>
  )
}