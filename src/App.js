import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Header from './components/Header/Header';
import ProductContainer from './components/ProductContainer/ProductContainer';

function App() {
  return (
    <>
      <Header/>
      <main className="py-16">
        <div className="productWrapper">
          <ProductContainer/>
          <AddProduct/>
        </div>
      </main>
    </>
  );
}

export default App;
