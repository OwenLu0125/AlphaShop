import { createContext, useState, useRef } from 'react'
import { CartContextProvier } from './CartContext'
export const MainContext = createContext()
export const MainContextProvier = ({ children }) => {
  // hook
  const [step, setStep] = useState(0)
  const formRef = useRef(new Map())
  const [shippingCost, setShippingCost] = useState('免費')

  // handle
  const handleStepItemChange = ({ step }) => setStep(step)
  const handleSubmit = ({ count }) => {
    let nFill = 0
    formRef.current.forEach((value, key) => {
      if (value.value) {
        console.log(`${key}：${value.value}`)
      } else {
        console.log(`${key}： 沒填`)
        nFill += 1
      }
    })
    console.log(`購物車金額(小記)： ${count}`)
    console.log(`共${nFill}個欄位沒填`)
  }
  const handleShippingOption = ({ price }) => setShippingCost(price)

  // value
  const value = {
    step,
    formRef,
    onStepItemChange: handleStepItemChange,
    onSubmit: handleSubmit,
    shippingCost,
    onShippingOption: handleShippingOption
  }
  return (
    <MainContext.Provider value={value}>
      <CartContextProvier>{children}</CartContextProvier>
    </MainContext.Provider>
  )
}
