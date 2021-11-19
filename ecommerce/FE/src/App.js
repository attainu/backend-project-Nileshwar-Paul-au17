
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import  Header from './components/header/header.jsx';
import Home from './components/home/home.jsx';
import Cart from './components/cart/cart.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route exact path="/" element={<Home/>} > 
      
        </Route>
        <Route exact path="/cart" element={<Cart/>}>   
        </Route>
        </Routes>
       
        
      
      </BrowserRouter>
   
      
    
    </div>
   
  );
}

export default App;
