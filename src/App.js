import { useSelector } from 'react-redux';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import BillingDetails from './components/BillingDetails/BillingDetails';
import CartContainer from './components/CartContainer/CartContainer';
import Header from './components/Header/Header';
import ProductContainer from './components/ProductContainer/ProductContainer';

function App() {
  const home = useSelector(state=> state.page.home);
  return (
    <>
      <Header/>
      <main className="py-16">
        {
          home ? <div className="productWrapper">
          <ProductContainer/>
          <AddProduct/>
        </div> : <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <CartContainer/>
            <BillingDetails/>
          </div>
        </div>
        }
      </main>
    </>
  );
}

export default App;
