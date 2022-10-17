import {
    BrowserRouter,
    Router,
    Routes,
    Route
} from 'react-router-dom';

import './assets/root.css';

import Navbar from './components/Navbar';

import FormPage from './pages/FormPage';

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
              <Route path="/form" element={ <FormPage /> }></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
