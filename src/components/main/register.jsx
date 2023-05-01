import StepProgress from "./step_progress"
import Step1 from "./step1";

function Register() {
  return (
  <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
      <StepProgress />
    <section className="form-container col col-12">
      <Step1 />
    </section>
  </section>
  )
}

export default Register;