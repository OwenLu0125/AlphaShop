import './reset.css'
import './base.scss'
import { AppContextProvier } from './context/AppContext'
import Header from './component/Header/Header'
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <AppContextProvier>
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
    </AppContextProvier>
  )
}

export default App;
