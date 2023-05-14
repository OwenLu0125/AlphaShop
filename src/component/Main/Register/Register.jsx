import Progress from './Progress'
import Form from './Form'
import styles from './Register.module.scss'
const Register = ({ icons , step, onShippingOption}) => {
  return (
    <>
      <section className={`${styles.registerContainer} col col-lg-6 col-sm-12`}>
        <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
        <Progress 
        icons={icons} step={step}
        />
        <Form
        step={step}
        onShippingOption={onShippingOption}
        />
      </section>
    </>
  )
}

export default Register
