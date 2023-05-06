import { ReactComponent as RightArrowIcon} from '../../icons/right-arrow.svg'
import { ReactComponent as LeftArrowIcon} from '../../icons/left-arrow.svg'

function ButtonGroup( {phase, children} ) {
  return (
    <section className="button-group col col-12" data-phase={phase} key={phase}>
      {children}
    </section>
  )
}

function Buttons( {text, className, onClick} ) {
    if (className === 'prev') {
      return (
      <button className={className} key={className} onClick={onClick} >
        <LeftArrowIcon className={`${className} cursor-point`} />
        {text}
      </button>
      )
    } else {
      return (
      <button className={className} key={className} onClick={onClick}>
        {text}
        <RightArrowIcon className={`${className} cursor-point`} />
      </button>
      )
    }
}

export default function ProgressControl({ onClick }) {
  return (
    <>
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <ButtonGroup phase={"address"}>
          <Buttons className="next" text={"下一步"} onClick={onClick}/>
        </ButtonGroup>
        <ButtonGroup phase={"shipping"}>
          <Buttons className="prev" text={"上一步"} onClick={onClick}/>
          <Buttons className="next" text={"下一步"} onClick={onClick}/>
        </ButtonGroup>
        <ButtonGroup phase={"credit-card"}>
          <Buttons className="prev" text={"上一步"} onClick={onClick}/>
          <Buttons className="next" text={"確認下單"} onClick={onClick}/>
        </ButtonGroup>
      </section>
    </>
  )
}