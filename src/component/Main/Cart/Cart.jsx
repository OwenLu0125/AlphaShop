import styles from './Cart.module.scss'
import { useState } from 'react'

const cartData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1
  }
]

const ProductListItem = ({ icons, item, onCartItemsChange }) => {
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

const Cart = ({ icons }) => {
  const [items, setItems] = useState(cartData)

  const handleCartItemsChange = ({ id, quantity }) => {
    if (quantity < 0) {
      return
    }
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity
          }
        }
        return item
      })
    })
  }

  // 計算加總金額
  let count = 0
  items.forEach(item => {
    count = count + item.price * item.quantity
  })
  return (
    <>
      <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        <section className={`${styles.productList} col col-12`} data-total-price='0'>
          {items.map((item) => (
            <ProductListItem
              item={item}
              icons={icons}
              key={item.id}
              onCartItemsChange={handleCartItemsChange}
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