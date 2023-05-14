import { AddressPhase, ShippingPhase, CreditPhase } from './FormPhase';
import styles from './Form.module.scss';

const Form = ({ step }) => {
  // 根據 step 的值來渲染相對應的組件
  const renderPhase = () => {
    switch (step) {
      case 0:
        return <AddressPhase />;
      case 1:
        return <ShippingPhase />;
      case 2:
        return <CreditPhase />;
      default:
        return null;
    }
  };

  return (
    <>
      <section className={`${styles.formContainer} col col-12`}>
        {renderPhase()} {/* 根據 step 渲染相應的組件 */}
      </section>
    </>
  );
};

export default Form;
