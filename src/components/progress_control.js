import { ReactComponent as RightArrowIcon} from '../icons/right-arrow.svg'
// import { ReactComponent as LeftArrowIcon} from '../icons/left-arrow.svg'

export default function ProgressControl() {
  return (
    <>
      <section class="button-group col col-12" data-phase="address">
            <button class="next">
              下一步
              <RightArrowIcon class="cursor-point" />
            </button>
          </section>
          {/* <section class="button-group col col-12" data-phase="shipping">
            <button class="prev">
              <LeftArrowIcon class="cursor-point" />
              上一步
            </button>
            <button class="next">
              下一步
              <RightArrowIcon class="cursor-point" />
            </button>
          </section>
          <section class="button-group col col-12" data-phase="credit-card">
            <button class="prev">
              <LeftArrowIcon class="cursor-point" />
              上一步
            </button>
            <button class="next">
              確認下單
            </button>
          </section> */}
    </>
  )
}