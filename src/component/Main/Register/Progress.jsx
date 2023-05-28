import styles from './Progress.module.scss'
import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import { MainContext } from '../../../context/MainContext'

const Step = ({ text, label, dataphase ,step}) => {
  const { icons } = useContext(AppContext)
  return (
    <span 
    className={styles.progressGroup} 
    dataphase={dataphase}
    step={step}
    >
      <span className={styles.progressIcon}>
        <span className={styles.text}>{text}</span>
        <svg className={`${styles.icon} cursor-point`}>
          <use xlinkHref={`${icons}#svg-icon-pg-complete`} />
        </svg>
      </span>
      <span className={styles.progressLabel}>{label}</span>
    </span>
  )
}

const Progress = () => {
  const { step } = useContext(MainContext)
  return (
    <>
      <section className={`${styles.progressContainer} col col-12`}>
        {/* 寄送地址 */}
        <Step 
          text='1' label='寄送地址' 
          dataphase='address'
          step={step}
        />
        <span className={styles.progressBar} data-order='1' step={step}/>
        {/* 運送方式 */}
        <Step 
          text='2' label='運送方式' 
          dataphase='shipping' 
          step={step}
        />
        <span 
        className={styles.progressBar} 
        data-order='2' 
        step={step}
        />
        {/* 付款資訊 */}
        <Step  
          text='3' 
          label='付款資訊' 
          dataphase='credit-card'
          step={step}
        />
      </section>
    </>
  )
}

export default Progress
