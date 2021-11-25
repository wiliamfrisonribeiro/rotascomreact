import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Sobre from './Sobre'
import Informacao from './Informacao'
import FormImc from './FormIMC'
import NotFound from './NotFound'
import Contador from './Contador'

import 'bootstrap/dist/css/bootstrap.min.css'

import '@popperjs/core/dist/cjs/popper.js'

import 'bootstrap/dist/js/bootstrap.min.js'
function App() {
  return (
    <div>
      <Router>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/sobre" element={<Sobre />}></Route>
          <Route exact path="/informacao" element={<Informacao />}></Route>
          <Route
            exact
            path="/informacao/: "
            element={<Informacao />}
          ></Route>
          <Route exact path="/imc" element={<FormImc />}></Route>
          <Route exact path="/contador" element={<Contador />}></Route>
          <Route exact path="/contador/:id" element={<Contador />}></Route>
          <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
