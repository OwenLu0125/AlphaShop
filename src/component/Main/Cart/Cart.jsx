
import styles from './Cart.module.scss'
import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import { CartContext } from '../../../context/CartContext'
import { MainContext } from '../../../context/MainContext'

const ProductListItem = ({ item }) => {
  const { icons } = useContext(AppContext)
  const { onCartItemsChange } = useContext(CartContext)
  return (
    <div className={`${styles.productContainer} col col-12`} data-count='0' data-price={item.price}>
      <img className={styles.imgContainer} src={item.img} alt={item.name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{item.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <span
              onClick={() => {
                onCartItemsChange?.({ id: item.id, quantity: item.quantity - 1 })
              }}
            >
              <svg className={`${styles.productAction} minus`}>
                <use xlinkHref={`${icons}#svg-icon-minus`} />
              </svg>
            </span>
            <span className={styles.productCount}>{item.quantity}</span>
            <span
              onClick={() => {
                onCartItemsChange?.({ id: item.id, quantity: item.quantity + 1 })
              }}
            >
              <svg className={`${styles.productAction} plus`}>
                <use xlinkHref={`${icons}#svg-icon-plus`} />
              </svg>
            </span>
          </div>
        </div>
        <div className={styles.price}>{item.price * item.quantity}</div>
      </div>
    </div>
  )
}

const Cart = () => {
  const { items, count } = useContext(CartContext)
  const { shippingCost } = useContext(MainContext)
  // 加上運費
  if (shippingCost === '$500') {
    count = count + 500
  }
  return (
    <>
      <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        <section className={`${styles.productList} col col-12`} data-total-price='0'>
          {items.map((item) => (
            <ProductListItem
              item={item}
              key={item.id}
            />
          ))}
        </section>
        {/* --------- 結帳  -------- */}
        <section className={`${styles.cartInfo} ${styles.shipping} col col-12`}>
          <div className={styles.text}>運費</div>
          <div className={styles.price}>免費</div>
        </section>
        <section className={`${styles.cartInfo} ${styles.total} col col-12`}>
          <div className={styles.text}>小計</div>
          <div className={styles.price}>${count}</div>
        </section>
      </section>
    </>
  )
}

export default Cart