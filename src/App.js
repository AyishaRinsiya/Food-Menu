import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import MenuList from './components/MenuList/MenuList';
import CategoryDishes from './components/CategoryDishes/CategoryDishes';
import Cart from './context/CartContext';


function App() {
  return (
    <div className="App">
     <Cart>
      <Navbar />
      <MenuList />
      <CategoryDishes />
      </Cart>
    </div>
  );
}

export default App;
