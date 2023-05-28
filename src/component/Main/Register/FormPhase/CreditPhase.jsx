import InputGroup from './InputGroup'
import styles from './CreditPhase.module.scss'
import { useContext } from 'react'
import { MainContext } from '../../../../context/MainContext'

const ShippingPhase = () => {
  const { formRef } = useContext(MainContext)
  return (
    <>
      <form className="col col-12" dataphase="credit-card">
        <h3 className={styles.formTitle}>付款資訊</h3>
        <section className=" formBody col col-12">
          <div className={`${styles.row} col col-12`}>
            <InputGroup
              inputLabel="持卡人姓名"
              placeholder="John Doe"
              layoutLg="input-w-lg-4"
              layoutSm="input-w-sm-full"
              formRef={formRef}
            />
          </div>
          <div className={`${styles.row} col col-12`}>
            <InputGroup
              inputLabel="卡號"
              placeholder="1111 2222 3333 4444"
              layoutLg="input-w-lg-4"
              layoutSm="input-w-sm-full"
              formRef={formRef}
            />
          </div>
          <div className={`${styles.row} col col-12`}>
            <InputGroup
              inputLabel="有效期限"
              placeholder="MM/YY"
              layoutLg="input-w-lg-3"
              layoutSm="input-w-sm-s3"
              formRef={formRef}
            />
            <InputGroup
              inputLabel="CVC / CCV"
              placeholder="123"
              layoutLg="input-w-lg-3"
              layoutSm="input-w-sm-s3"
              formRef={formRef}
            />
          </div>
        </section>
      </form>
    </>
  )
}

export default ShippingPhase
