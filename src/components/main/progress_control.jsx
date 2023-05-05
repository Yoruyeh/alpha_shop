import { ReactComponent as RightArrowIcon} from '../../icons/right-arrow.svg'
import { ReactComponent as LeftArrowIcon} from '../../icons/left-arrow.svg'

function ButtonGroup( {phase, onClick, children} ) {
  return (
    <section className="button-group col col-12" data-phase={phase} key={phase} onClick={onClick}>
      {children}
    </section>
  )
}

function Buttons( {text, className} ) {
    if (className === 'prev') {
      return (
      <button className={className} key={className}>
        <LeftArrowIcon className="cursor-point" />
        {text}
      </button>
      )
    } else {
      return (
      <button className={className} key={className}>
        {text}
        <RightArrowIcon className="cursor-point" />
      </button>
      )
    }
}

export default function ProgressControl() {
  return (
    <>
      <section className="progress-control-container col col-lg-6 col-sm-12">
        <ButtonGroup phase={"address"}>
          <Buttons className="next" text={"下一步"} />
        </ButtonGroup>
        <ButtonGroup phase={"shipping"}>
          <Buttons className="prev" text={"上一步"} />
          <Buttons className="next" text={"下一步"} />
        </ButtonGroup>
        <ButtonGroup phase={"credit-card"}>
          <Buttons className="prev" text={"上一步"} />
          <Buttons className="next" text={"確認下單"} />
        </ButtonGroup>
      </section>
    </>
  )
}