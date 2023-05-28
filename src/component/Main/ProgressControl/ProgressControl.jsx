import styles from './ProgressControl.module.scss'
import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import { MainContext } from '../../../context/MainContext'
import { CartContext } from '../../../context/CartContext'

const StepContext =() => {
  const { icons } = useContext(AppContext)
  const {step, onStepItemChange, onSubmit} = useContext(MainContext)
  const { count } = useContext(CartContext)
  
  if (step === 0 ) {
    return (
      <section className={`${styles.buttonGroup} col col-12`} dataphase='address'>
        <button
          className={`${styles.next} cursor-point`}
          onClick={() => { onStepItemChange?.({ step: step + 1 }) }}
        >
          下一步
          <svg>
            <use xlinkHref={`${icons}#svg-icon-right-arrow`} />
          </svg>
        </button>
      </section>
    )
  }
  else if (step === 1 ) {
    return (
      <section className={`${styles.buttonGroup} col col-12`}>
        <button
          className={`${styles.prev} cursor-point`}
          onClick={() => { onStepItemChange?.({ step: step - 1 }) }}
        >
          <svg>
            <use xlinkHref={`${icons}#svg-icon-left-arrow`} />
          </svg>
          上一步
        </button>
        <button
          className={`${styles.next} cursor-point`}
          onClick={() => { onStepItemChange?.({ step: step + 1 }) }}
        >
          下一步
          <svg>
            <use xlinkHref={`${icons}#svg-icon-right-arrow`} />
          </svg>
        </button>
      </section>
    )
  }
  else if (step === 2 ) {
    return (
      <section className={`${styles.buttonGroup} col col-12`}>
        <button
          className={`${styles.prev} cursor-point`}
          onClick={() => { onStepItemChange?.({ step: step - 1 }) }}
        >
          <svg>
            <use xlinkHref={`${icons}#svg-icon-left-arrow`} />
          </svg>
          上一步
        </button>
        <button
          className={`${styles.next} cursor-point`}
          onClick={() => onSubmit?.({ count })}
        >
          確認下單
        </button>
      </section>
    )
  }
}

const ProgressControl = () => {
return (
    <>
      <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
      <StepContext/>
      </section>
    </>
  )
}

export default ProgressControl
