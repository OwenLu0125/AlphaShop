import styles from './InputGroup.module.scss'
const InputGroup = ({ inputLabel, placeholder, layoutLg, layoutSm }) => {
  return (
    <div className={`${styles.inputGroup} ${layoutLg} ${layoutSm}`}>
      <div className={styles.inputLabel}>{inputLabel}</div>
      <input type='text' placeholder={placeholder} />
    </div>
  )
}

export default InputGroup
