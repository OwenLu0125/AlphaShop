import styles from './InputGroup.module.scss'
const InputGroup = ({ inputLabel, placeholder, layoutLg, layoutSm, formRef }) => {
  return (
    <div className={`${styles.inputGroup} ${layoutLg} ${layoutSm}`}>
      <div className={styles.inputLabel}>{inputLabel}</div>
      <input
        type="text"
        placeholder={placeholder}
        ref={(node) => {
          formRef.current.set
          (inputLabel, node)
        }}
      />
    </div>
  )
}

export default InputGroup
