import styles from './ProgressControl.module.scss'

const ProgressControl = ({ icons }) => {
  return (
    <>
      <section className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}>
        <section className={`${styles.buttonGroup} col col-12`} data-phase='address'>
          <button className={`${styles.next} cursor-point`}>
            下一步
            <svg>
              <use xlinkHref={`${icons}#svg-icon-right-arrow`} />
            </svg>
          </button>
        </section>
        {/* <section className={`${styles.buttonGroup} col col-12`} dataphase='shipping'>
          <button className={`${styles.prev} cursor-point`}>
            <svg>
              <use xlinkHref={`${icons}#svg-icon-left-arrow`} />
            </svg>
            上一步
          </button>
          <button className={`${styles.next} cursor-point`}>
            下一步
            <svg>
              <use xlinkHref={`${icons}#svg-icon-right-arrow`} />
            </svg>
          </button>
        </section> */}
        {/* <section className={`${styles.buttonGroup} col col-12`} dataphase='credit-card'>
          <button className={`${styles.prev} cursor-point`}>
            <svg>
              <use xlinkHref={`${icons}#svg-icon-left-arrow`} />
            </svg>
            上一步
          </button>
          <button className={`${styles.next} cursor-point`}>確認下單</button>
        </section> */}
      </section>
    </>
  )
}

export default ProgressControl
