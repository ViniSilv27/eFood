import { GlobalCss } from './styles'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
