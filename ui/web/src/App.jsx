import {
    BrowserRouter,
    Router,
    Routes,
    Route
} from 'react-router-dom';

import './assets/root.css';

import Navbar from './components/Navbar';

function HomePage() {
    return (
        <h1>Home!</h1>
    )
}

function App() {

  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={ <HomePage /> }></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
