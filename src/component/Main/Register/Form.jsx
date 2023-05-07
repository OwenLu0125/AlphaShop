import { AddressPhase, CreditPhase, ShippingPhase } from './FormPhase'
import styles from './Form.module.scss'
const Form = () => {
  return (
    <>
      <section className={`${styles.formContainer} col col-12`}>
        <AddressPhase />
        {/* <ShippingPhase /> */}
        {/* <CreditPhase /> */}
      </section>
    </>
  )
}

export default Form
