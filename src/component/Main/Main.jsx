// -- style
import './Main.scss'
// -- component
import Register from './Register/Register'
import Cart from './Cart/Cart'
import ProgressControl from './ProgressControl/ProgressControl'

const Main = () => {
  return (
    <>
      <main className='siteMain'>
        <div className='mainContainer'>
          <Register />
          <Cart />
          <ProgressControl />
        </div>
     </main>
    </>
  )
}

export default Main