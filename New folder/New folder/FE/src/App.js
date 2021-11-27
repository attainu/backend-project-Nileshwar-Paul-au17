
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './components/home/home.jsx';
import Cart from './components/cart/cart.jsx';
import Templateprovider from './template/templateprovider.jsx';
import { ContextProvider } from './context/contextProvider.jsx';
import { DetailView } from './components/itemdetail/detailItem.jsx';
function App() {
  return (

    <Templateprovider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={ <> <Home /> </>} >  </Route>
            <Route exact path="/cart" element={<Cart />}> </Route>
            <Route exact path="/product/:id" element={<DetailView />}> </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </Templateprovider>

  )
}

export default App;