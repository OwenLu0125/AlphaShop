// -- style
import './Main.scss'
// -- component
import Register from './Register/Register'
import Cart from './Cart/Cart'
import ProgressControl from './ProgressControl/ProgressControl'

const Main = ({ icons }) => {
  return (
    <>
      <main className='site-main'>
        <div className='main-container'>
          <Register icons={icons} />
          <Cart icons={icons} />
          <ProgressControl icons={icons} />
        </div>
      </main>
    </>
  )
}

export default Main
