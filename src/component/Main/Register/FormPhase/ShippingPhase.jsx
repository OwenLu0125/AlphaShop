import styles from './ShippingPhase.module.scss'
const PhaseItem = ({ id, name, text, period, price }) => {
  return (
    <label className={`${styles.radioGroup} col col-12`}>
      <input
        id={id}
        type='radio'
        name={name}
      />
      <div className={styles.radioInfo}>
        <div className={`${styles.row} col col-12`}>
          <div className={styles.text}>{text}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div className={`${styles.period} col col-12`}>{period}</div>
      </div>
      <div className={styles.radioBoxBorder} />
    </label>
  )
}

const CreditPhase = () => {
  return (
    <>
      <form className='col col-12' dataphase='shipping'>
        <h3 className={styles.formTitle}>運送方式</h3>
        <section className={`${styles.formBody} col col-12`}>
          <PhaseItem 
            id='shippingStandard' 
            name='shipping'
            text='標準運送'
            period='約 3~7 個工作天'
            price='免費'
          />
          <PhaseItem
            id='shippingDhl' 
            name='shipping'
            text='DHL 貨運'
            period='48 小時內送達'
            price='$500'
          />
        </section>
      </form>
    </>
  )
}

export default CreditPhase
