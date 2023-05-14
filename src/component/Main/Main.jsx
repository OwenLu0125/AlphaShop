// -- style
import './Main.scss'
// -- component
import Register from './Register/Register'
import Cart from './Cart/Cart'
import ProgressControl from './ProgressControl/ProgressControl'
import { useState } from 'react'

const Main = ({ icons }) => {
  const [step, setStep] = useState(0)
  const [shippingCost, setShippingCost] = useState('free')
  const handleStepItemChange = ({step}) => setStep(step)
  const handleShippingOption =({price}) => setShippingCost(price)

  return (
    <>
      <main className='site-main'>
        <div className='main-container'>
          <Register 
          icons={icons} 
          step={step}
          onShippingOption={handleShippingOption}
          />
          <Cart 
          icons={icons}
          shippingCost={shippingCost}
          />
          <ProgressControl
          icons={icons}
          step={step}
          onStepItemChange={handleStepItemChange}
          />
        </div>
      </main>
    </>
  )
}

export default Main